import { Product } from '@/types/product';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  try {
    const res = await fetch(
      `https://bazario-mkur.onrender.com/api/public/ads`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: 'include',
      },
    );
    const data: Product[] = (await res.json()) as Product[];
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching adverts:', error);
    return NextResponse.json(
      { message: 'Error fetching adverts' },
      { status: 500 },
    );
  }
}
