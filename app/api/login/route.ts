// app/api/login/route.ts
import { cookies } from 'next/headers';

export async function GET() {
  (await cookies()).set('refreshToken', '11111111111', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });
  (await cookies()).set('accessToken', '22222222222', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  // ⬅️ 3. Повертаємо accessToken на фронт
  return Response.json({ message: 'Login successful' });
}
