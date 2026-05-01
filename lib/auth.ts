import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const COOKIE_NAME = 'auth_token';

export interface UserPayload {
  id: number;
  email: string;
  name: string;
  refId: string;
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function generateToken(user: UserPayload): string {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): UserPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as UserPayload;
  } catch {
    return null;
  }
}

export function createAuthResponse(token: string) {
  const response = NextResponse.json({ success: true });
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
  return response;
}

export async function getCurrentUser(): Promise<UserPayload | null> {
  try {
    const cookieStore = await import('next/headers').then(m => m.cookies());
    const token = cookieStore.get(COOKIE_NAME)?.value;
    
    if (!token) return null;
    
    return verifyToken(token);
  } catch {
    return null;
  }
}

export function generateRefId(): string {
  return 'REF' + Math.random().toString(36).substring(2, 15).toUpperCase();
}