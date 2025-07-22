import { IUser } from '@/types/user';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const res = await fetch(
    'https://bazario-mkur.onrender.com/api/private/user',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const data = (await res.json()) as IUser;
  return Response.json(data);
}
export async function PATCH(req: NextRequest) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const body = (await req.json()) as IUser;
  const res = await fetch(
    'https://bazario-mkur.onrender.com/api/private/user',
    {
      method: 'PATCH',

      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  );

  const data = (await res.json()) as IUser;
  return Response.json(data);
}
