import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const userData = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        refId: true,
        balance: true,
        investBalance: true,
        totalIncome: true,
        todayIncome: true,
        vipLevel: true,
        investor: true,
        createdAt: true,
      },
    });

    if (!userData) {
      return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
    }

    // Count direct referrals linked to this user's unique refId
    const firstLevelUsers = await prisma.user.count({
      where: { refBy: userData.refId },
    });

    const teamSize = firstLevelUsers || 0;

    return NextResponse.json({
      success: true,
      user: {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        refId: userData.refId,
        balance: Number(userData.balance) || 0,
        investBalance: Number(userData.investBalance) || 0,
        totalIncome: Number(userData.totalIncome) || 0,
        todayIncome: Number(userData.todayIncome) || 0,
        vipLevel: userData.vipLevel || 1,
        investor: userData.investor || false,
        createdAt: userData.createdAt,
        teamSize,
      },
    });
  } catch (error: any) {
    console.error('Get user error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch user data' },
      { status: 500 }
    );
  }
}
