import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      where: { status: 'active' },
      orderBy: { price: 'asc' },
    });
    return NextResponse.json({ success: true, products });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to fetch products' }, { status: 500 });
  }
}
