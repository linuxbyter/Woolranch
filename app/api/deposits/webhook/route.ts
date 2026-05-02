import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // IntaSend passes various keys depending on webhook configuration
    const { invoice_id, status, reference, amount } = body;

    console.log('Intasend webhook received:', body);

    if (!invoice_id && !reference) {
      return NextResponse.json({ success: false, message: 'Missing tracking reference' }, { status: 400 });
    }

    // 1. Locate the pending deposit record
    const deposit = await prisma.deposit.findFirst({
      where: {
        OR: [
          { transactionId: invoice_id },
          { orderId: reference },
        ].filter(Boolean),
      },
    });

    if (!deposit) {
      console.warn('Deposit not found for invoice:', invoice_id || reference);
      return NextResponse.json({ success: false, message: 'Deposit not found in database' }, { status: 404 });
    }

    // 2. Prevent duplicate processing
    if (deposit.status === 'approved') {
      return NextResponse.json({ success: true, message: 'Payment already processed' });
    }

    // IntaSend statuses can vary. We ensure all completion tags are covered.
    const isCompleted = 
      status === 'complete' || 
      status === 'COMPLETED' || 
      status === 'paid' || 
      body.state === 'COMPLETE';

    if (isCompleted) {
      const creditAmount = Number(deposit.finalAmount || amount || deposit.amount);

      // Execute thread-safe transaction
      await prisma.$transaction(async (tx) => {
        // A. Update the specific deposit status
        await tx.deposit.update({
          where: { id: deposit.id },
          data: { status: 'approved' },
        });

        // B. Credit the user's account
        await tx.user.update({
          where: { id: deposit.userId },
          data: {
            balance: { increment: creditAmount },
          },
        });

        // C. Log transaction to the user ledger
        await tx.userLedger.create({
          data: {
            userId: deposit.userId,
            reason: 'intasend_deposit',
            particulating: 'Deposit via Intasend STK Push',
            amount: creditAmount,
            debit: creditAmount,
            date: new Date(),
          },
        });
      });

      console.log(`Success: Account credited for User ID ${deposit.userId}`);
      return NextResponse.json({ success: true, message: 'Payment processed and user credited' });
    }

    // Mark failed if status is explicitly failed or processing error
    if (status === 'failed' || status === 'FAILED') {
      await prisma.deposit.update({
        where: { id: deposit.id },
        data: { status: 'failed' },
      });
      return NextResponse.json({ success: true, message: 'Deposit marked as failed' });
    }

    return NextResponse.json({ success: true, message: 'Status tracked, awaiting confirmation' });
  } catch (error: any) {
    console.error('Webhook handling error:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
