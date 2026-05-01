import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { hashPassword, generateToken, generateRefId } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password, phone, refBy } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'Name, email and password are required' },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'Email already registered' },
        { status: 400 }
      );
    }

    const hashedPassword = await hashPassword(password);
    const refId = generateRefId();

    let referredByString: string | null = null;
    
    // If a referral code was provided in the registration
    if (refBy) {
      const referrer = await prisma.user.findFirst({
        where: { refId: refBy }, // We look up the person owning that refId
      });
      
      if (referrer) {
        // FIX: Assign the refId (String), not the id (Number)
        referredByString = referrer.refId; 
      }
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phone,
        refId,
        refBy: referredByString, // This matches the String type in your schema
      },
    });

    const token = generateToken({
      id: user.id,
      email: user.email,
      name: user.name,
      refId: user.refId,
    });

    const response = NextResponse.json({
      success: true,
      message: 'Registration successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        refId: user.refId,
        balance: user.balance,
      },
    });

    response.cookies.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    return response;
  } catch (error: any) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { success: false, message: 'Registration failed' },
      { status: 500 }
    );
  }
}
