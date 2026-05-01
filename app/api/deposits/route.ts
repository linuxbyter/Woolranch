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
    const { amount, phone, paymentMethodId } = body;

    if (!amount || amount < 100) {
      return NextResponse.json(
        { success: false, message: 'Minimum deposit is KES 100' },
        { status: 400 }
      );
    }

    if (!isValidKenyanPhone(phone)) {
      return NextResponse.json(
        { success: false, message: 'Invalid phone number. Use format: 07XXXXXXXX or 254XXXXXXXX' },
        { status: 400 }
      );
    }

    const paymentMethod = await prisma.paymentMethod.findFirst({
      where: { id: paymentMethodId, status: 'active' },
    });

    if (!paymentMethod) {
      return NextResponse.json(
        { success: false, message: 'Payment method not found' },
        { status: 404 }
      );
    }

    const setting = await prisma.setting.findFirst();
    if (!setting?.openDeposit) {
      return NextResponse.json(
        { success: false, message: 'Deposits are currently disabled' },
        { status: 403 }
      );
    }

    const reference = `DEP${Date.now()}${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const formattedPhone = formatPhoneNumber(phone);
    const baseUrl = request.headers.get('origin') || process.env.NEXT_PUBLIC_BASE_URL;

    const deposit = await prisma.deposit.create({
      data: {
        userId: user.id,
        methodName: paymentMethod.name,
        orderId: reference,
        number: formattedPhone,
        amount,
        finalAmount: amount,
        date: new Date(),
        status: 'pending',
      },
    });

    if (paymentMethod.auto && paymentMethod.tag === 'intasend') {
      try {
        const stkResponse = await initiateStkPush({
          phone: formattedPhone,
          amount,
          currency: 'KES',
          reference,
          callbackUrl: `${baseUrl}/api/deposits/webhook`,
        });

        await prisma.deposit.update({
          where: { id: deposit.id },
          data: { transactionId: stkResponse.invoice_id },
        });

        return NextResponse.json({
          success: true,
          message: 'STK Push sent! Check your phone and enter PIN to complete payment.',
          invoiceId: stkResponse.invoice_id,
          depositId: deposit.id,
        });
      } catch (error: any) {
        await prisma.deposit.update({
          where: { id: deposit.id },
          data: { status: 'failed' },
        });

        return NextResponse.json(
          { success: false, message: error.message || 'STK Push failed' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Deposit initiated. Please complete payment manually.',
      depositId: deposit.id,
    });
  } catch (error: any) {
    console.error('Deposit error:', error);
    return NextResponse.json(
      { success: false, message: 'Deposit failed' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const deposits = await prisma.deposit.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    return NextResponse.json({
      success: true,
      deposits,
    });
  } catch (error: any) {
    console.error('Get deposits error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch deposits' },
      { status: 500 }
    );
  }
}