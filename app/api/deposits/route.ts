import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';
import { initiateStkPush, formatPhoneNumber, isValidKenyanPhone } from '@/lib/intasend';

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { amount, phone, paymentMethodId, paymentMethod: selectedMethod } = body;

    if (!amount || amount < 100) {
      return NextResponse.json(
        { success: false, message: 'Minimum deposit is KES 100' },
        { status: 400 }
      );
    }

    // 1. Resolve the Payment Method from the Database
    let paymentMethod = null;
    
    if (paymentMethodId) {
      paymentMethod = await prisma.paymentMethod.findFirst({
        where: { id: Number(paymentMethodId), status: 'active' },
      });
    } else if (selectedMethod) {
      paymentMethod = await prisma.paymentMethod.findFirst({
        where: { 
          tag: selectedMethod === 'manual' ? 'manual' : 'intasend', 
          status: 'active' 
        },
      });
    }

    // [SANDBOX FALLBACK]: If your DB doesn't have seeded methods yet, create a default on the fly for testing
    if (!paymentMethod) {
      paymentMethod = {
        id: 1,
        name: selectedMethod === 'manual' ? 'Manual' : 'MPesa',
        tag: selectedMethod === 'manual' ? 'manual' : 'intasend',
        auto: selectedMethod !== 'manual',
        status: 'active'
      };
    }

    // 2. Validate Phone Number for Automated IntaSend MPesa Deposits
    if (paymentMethod.auto && paymentMethod.tag === 'intasend') {
      if (!phone || !isValidKenyanPhone(phone)) {
        return NextResponse.json(
          { success: false, message: 'Invalid phone number. Use format: 07XXXXXXXX or 254XXXXXXXX' },
          { status: 400 }
        );
      }
    }

    // 3. Settings Check - Falls back to true if no settings row exists yet
    const setting = await prisma.setting.findFirst();
    const depositsEnabled = setting ? setting.openDeposit : true;
    
    if (!depositsEnabled) {
      return NextResponse.json(
        { success: false, message: 'Deposits are currently disabled' },
        { status: 403 }
      );
    }

    const reference = `DEP${Date.now()}${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const formattedPhone = phone ? formatPhoneNumber(phone) : 'MANUAL';
    const baseUrl = request.headers.get('origin') || process.env.NEXT_PUBLIC_BASE_URL;

    // 4. Create Pending Deposit Record
    const deposit = await prisma.deposit.create({
      data: {
        userId: user.id,
        methodName: paymentMethod.name,
        orderId: reference,
        number: formattedPhone,
        amount: parseFloat(amount),
        finalAmount: parseFloat(amount),
        date: new Date(),
        status: 'pending',
      },
    });

    // 5. Fire IntaSend STK Push if method is auto
    if (paymentMethod.auto && paymentMethod.tag === 'intasend') {
      try {
        console.log('Sending STK Push payload:', { phone: formattedPhone, amount, reference });

        const stkResponse = await initiateStkPush({
          phone: formattedPhone,
          amount: parseFloat(amount),
          currency: 'KES',
          reference,
          callbackUrl: `${baseUrl}/api/deposits/webhook`,
        });

        console.log('IntaSend API returned success:', stkResponse);

        // We cast to 'any' here so TypeScript lets us check all possible ID locations during debugging
const invoiceId = (stkResponse as any)?.invoice?.invoice_id || (stkResponse as any)?.invoice_id || (stkResponse as any)?.id;
        
        await prisma.deposit.update({
          where: { id: deposit.id },
          data: { transactionId: invoiceId },
        });

        return NextResponse.json({
          success: true,
          message: 'STK Push sent! Check your phone and enter your MPesa PIN.',
          invoiceId: invoiceId,
          depositId: deposit.id,
        });
      } catch (error: any) {
        // Log the exact internal error from IntaSend to your terminal logs
        console.error('IntaSend STK Push Error Details:', error);

        await prisma.deposit.update({
          where: { id: deposit.id },
          data: { status: 'failed' },
        });

        return NextResponse.json(
          { 
            success: false, 
            message: error.message || 'STK Push initialization failed',
            details: error.toString() 
          },
          { status: 500 }
        );
      }
    }

    // Manual Deposit Response
    return NextResponse.json({
      success: true,
      message: 'Deposit initiated. Admin will verify your manual payment shortly.',
      depositId: deposit.id,
    });
  } catch (error: any) {
    console.error('Deposit processing error:', error);
    return NextResponse.json(
      { success: false, message: 'An internal error occurred' },
      { status: 500 }
    );
  }
}
