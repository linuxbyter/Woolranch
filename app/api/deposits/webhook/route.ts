import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { checkPaymentStatus } from '@/lib/intasend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { invoice_id, status, reference, amount } = body;

    console.log('Intasend webhook received:', body);

    if (!invoice_id) {
      return NextResponse.json({ success: false, message: 'Missing invoice_id' }, { status: 400 });
    }

    const deposit = await prisma.deposit.findFirst({
      where: {
        OR: [
          { transactionId: invoice_id },
          { orderId: reference },
        ],
      },
    });

    if (!deposit) {
      console.log('Deposit not found for invoice:', invoice_id);
      return NextResponse.json({ success: false, message: 'Deposit not found' }, { status: 404 });
    }

    if (deposit.status === 'approved') {
      return NextResponse.json({ success: true, message: 'Already processed' });
    }

    const isCompleted = status === 'complete' || status === 'COMPLETED' || status === 'paid';

    if (isCompleted) {
      await prisma.$transaction(async (tx: any) => {
        await tx.deposit.update({
          where: { id: deposit.id },
          data: { status: 'approved' },
        });

        await tx.user.update({
          where: { id: deposit.userId },
          data: {
            balance: { increment: deposit.finalAmount },
          },
        });

        await tx.userLedger.create({
          data: {
            userId: deposit.userId,
            reason: 'intasend_deposit',
            particulating: 'Deposit via Intasend STK Push',
            amount: deposit.amount,
            debit: deposit.finalAmount,
            date: new Date(),
          },
        });
      });

      return NextResponse.json({ success: true, message: 'Payment processed' });
    }

    return NextResponse.json({ success: true, message: 'Status updated' });
  } catch (error: any) {
    console.error('Webhook error:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}