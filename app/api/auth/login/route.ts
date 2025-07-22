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
  if (accessToken) {
    const payload = JSON.parse(atob(accessToken.split('.')[1])) as {
      exp: number;
    };
    const exp = payload.exp; // Unix timestamp (секунди)

    // const expiresAt = new Date(exp * 1000);
    console.log('Токен дійсний до:', exp);
  }
  const refreshToken = externalRes.headers
    .getSetCookie?.()[0]
    .split(';')[0]
    .split('=')[1];

  const res = NextResponse.json({ message: 'Login successful' });
  res.cookies.set('accessToken', accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/',
  });

  res.cookies.set('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/',
  });

  return res;
}
