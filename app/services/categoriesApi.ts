import { ICategory } from '@/types';

export async function getCategories(): Promise<ICategory[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/public/categories`,
    {
      credentials: 'include',
    },
  );
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json() as Promise<ICategory[]>;
}
