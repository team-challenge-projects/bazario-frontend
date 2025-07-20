import { IUser } from '@/types/user';
import { cookies } from 'next/headers';

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
