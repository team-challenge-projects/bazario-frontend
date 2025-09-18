import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  try {
    const res = await fetch(
      `https://bazario-mkur.onrender.com/api/private/ad`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          title: 'string',
          description: 'string',
          images: ['string'],
          price: 0,
          cityName: 'string',
          cityCoordinate: 'string',
          distance: 0,
        }),
        credentials: 'include',
      },
    );
    const data: { url: string } = (await res.json()) as { url: string };
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error creating advertisement:', error);
    return NextResponse.json(
      { message: 'Error creating advertisement' },
      { status: 500 },
    );
  }
}
