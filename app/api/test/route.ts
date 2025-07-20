import { cookies } from 'next/headers';

export async function POST() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;

  if (!refreshToken) {
    return new Response('Unauthorized', { status: 401 });
  }

  // refreshToken є
  return Response.json({ message: 'Refresh token found', refreshToken });
}
