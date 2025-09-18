import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const formData = await req.formData();
  const { id, type } = Object.fromEntries(formData.entries());
  formData.delete('id');
  formData.delete('type');

  if (!id) {
    return NextResponse.json(
      { message: 'User ID is missing' },
      { status: 400 },
    );
  }
  if (!type) {
    return NextResponse.json({ message: 'Type is missing' }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://bazario-mkur.onrender.com/api/image/${(type as string).toUpperCase()}/${id as string}`,
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
  } catch (error) {
    console.error('Error uploading image:', error);
    return NextResponse.json(
      { message: 'Error uploading image' },
      { status: 500 },
    );
  }
}
