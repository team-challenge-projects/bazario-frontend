import { cookies } from 'next/headers';

export async function POST() {
  const allCookies = (await cookies()).getAll();

  if (!allCookies) {
    return new Response('Unauthorized', { status: 401 });
  }

  // refreshToken є
  return Response.json({ message: 'Refresh token found', allCookies });
}
