import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> },
) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const formData = await req.formData();
  const { userId } = await params;
  if (!userId) {
    return NextResponse.json(
      { message: 'User ID is missing' },
      { status: 400 },
    );
  }
  const res = await fetch(
    `https://bazario-mkur.onrender.com/api/image/AVATAR/${userId}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
      credentials: 'include',
    },
  );
  const data: { url: string } = (await res.json()) as { url: string };
  return NextResponse.json(data);
}
