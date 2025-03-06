'use client';

import { useSearchParams } from 'next/navigation';

import { categoriesName } from '@/lib/categories/categories.data';

export const CategoryName = () => {
  const searchParams = useSearchParams();
  const category =
    (searchParams.get('category') as keyof typeof categoriesName) || '';
  return (
    <h1 className="mb-11 text-2xl font-bold">{categoriesName[category]}</h1>
  );
};
