import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  const cookieStore = await cookies();
  const refreshToken: string | null | undefined =
    cookieStore.get('refreshToken')?.value ?? '';
  if (!refreshToken) {
    return new Response('No refresh token', { status: 401 });
  }

  // ⚠️ Запит на сторонній сервер для оновлення токенів
  const externalRes = await fetch(
    'https://bazario-mkur.onrender.com/api/public/refreshToken',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    },
  );

  if (!externalRes.ok) {
    return new Response('Failed to refresh', { status: 403 });
  }

  const accessToken = await externalRes.text();

  const res = new NextResponse(accessToken);
  res.cookies.set('accessToken', accessToken, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 15, // 15 хвилин
    secure: true,
    sameSite: 'strict',
  });

  return res;
}
