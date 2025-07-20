import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = (await req.json()) as { email: string; password: string };
  const externalRes = await fetch(
    'https://bazario-mkur.onrender.com/api/anonymous/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      credentials: 'include',
    },
  );
  if (!externalRes.ok) {
    return NextResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 },
    );
  }
  const accessToken = await externalRes.text();
  const refreshToken = externalRes.headers
    .getSetCookie?.()[0]
    .split(';')[0]
    .split('=')[1];
  const maxAge = externalRes.headers
    .getSetCookie?.()[0]
    .split(';')[2]
    .split('=')[1];

  const res = NextResponse.json({ message: 'Login successful' });
  res.cookies.set('accessToken', accessToken, {
    httpOnly: true,
    maxAge: 60 * 15, // 15 хв
    secure: true,
    sameSite: 'strict',
    path: '/',
  });

  res.cookies.set('refreshToken', refreshToken, {
    httpOnly: true,
    maxAge: parseInt(maxAge),
    secure: true,
    sameSite: 'strict',
    path: '/',
  });

  return res;
}
