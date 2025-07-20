import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get('accessToken')?.value;
  const refreshToken = req.cookies.get('refreshToken')?.value;
  // 🔓 Якщо є accessToken — пропускаємо
  if (accessToken) return NextResponse.next();

  // ❌ Якщо немає refreshToken — редирект на login
  if (!refreshToken) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // ⚡ Спробувати оновити accessToken через /api/auth/refresh
  const refreshRes = await fetch(`${req.nextUrl.origin}/api/auth/refresh`, {
    method: 'POST',
    headers: {
      Cookie: `refreshToken=${refreshToken}`,
    },
  });

  if (!refreshRes.ok) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // ⛳ Отримуємо новий токен з відповіді
  const newAccessToken = await refreshRes.text();

  const res = NextResponse.next();
  res.cookies.set('accessToken', newAccessToken, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 15,
    sameSite: 'strict',
    secure: true,
  });

  return res;
}

// 🔒 Додай до яких маршрутів застосовувати
export const config = {
  matcher: ['/profile/:path*'],
};
