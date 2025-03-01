import React, { FC } from 'react';

import GoodsList from '@/components/GoodsList';

interface CategoriesPageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
  params?: Promise<{ slug: string }>;
}
const page: FC<CategoriesPageProps> = async ({ params }) => {
  const { slug } = (await params) || {};
  if (!slug) {
    console.error('Slug is undefined');
    return null;
  }
  // console.log('slug', slug);
  return (
    <div className="flex">
      <GoodsList />
    </div>
  );
};

export default page;
