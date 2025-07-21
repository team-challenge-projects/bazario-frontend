import { cookies } from 'next/headers';

export async function POST() {
  const cookieStore = await cookies();
  const refreshToken: string | null | undefined =
    cookieStore.get('refreshToken')?.value ?? '';
  if (!refreshToken) {
    return new Response('No refresh token', { status: 401 });
  }

  // ⚠️ Запит на сторонній сервер для оновлення токенів
  try {
    const externalRes = await fetch(
      'https://bazario-mkur.onrender.com/api/public/refreshToken',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
        credentials: 'include',
      },
    );
    if (!externalRes.ok) {
      return new Response('Failed to refresh', { status: 403 });
    }

    const accessToken = await externalRes.text();

    return new Response(accessToken, { status: 200 });
  } catch (error) {
    console.error('❌ Refresh token error:', error);
    return new Response('Failed to refresh', { status: 403 });
  }
}
