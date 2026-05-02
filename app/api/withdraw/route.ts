import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { amount, phone } = body;

    // 1. Validate Input data
    const withdrawAmount = parseFloat(amount);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid withdrawal amount' },
        { status: 400 }
      );
    }

    if (!phone) {
      return NextResponse.json(
        { success: false, message: 'Phone number is required' },
        { status: 400 }
      );
    }

    // 2. Fetch the user's fresh balance from database
    const dbUser = await prisma.user.findUnique({
      where: { id: user.id },
      select: { balance: true },
    });

    if (!dbUser) {
      return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
    }

    // 3. Check if user has sufficient funds
    if (Number(dbUser.balance) < withdrawAmount) {
      return NextResponse.json(
        { success: false, message: 'Insufficient balance available' },
        { status: 400 }
      );
    }

    // 4. Thread-safe Transaction: Deduct balance and create the record
    await prisma.$transaction(async (tx) => {
      // A. Deduct the amount from user's account
      await tx.user.update({
        where: { id: user.id },
        data: {
          balance: { decrement: withdrawAmount },
        },
      });

      // B. Create a pending withdrawal record for admin approval
      await tx.withdrawal.create({
        data: {
          userId: user.id,
          amount: withdrawAmount,
          phone: phone, // Changed from 'number' to 'phone' to match schema expectations
          status: 'pending',
          date: new Date(),
        },
      });

      // C. Record this deduction in the user's financial ledger
      await tx.userLedger.create({
        data: {
          userId: user.id,
          reason: 'withdrawal_request',
          particulating: `Withdrawal request to MPesa (${phone})`,
          amount: withdrawAmount,
          credit: withdrawAmount,
          date: new Date(),
        },
      });
    });

    return NextResponse.json({
      success: true,
      message: 'Withdrawal request submitted. Admin will process it shortly.',
    });
  } catch (error: any) {
    console.error('Withdrawal processing error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to process withdrawal request' },
      { status: 500 }
    );
  }
}
