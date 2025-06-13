'use client';
import { Suspense } from 'react';

import { products } from '@/utils/fakeData';

import Categories from '@/components/Categories';
import GoodsList from '@/components/GoodsList';
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();
  const hidePaddings = ['/login', '/reset-password', '/register', '/verify'];
  const isPaddingsHidden = hidePaddings.includes(pathname);

  return (
    <div
      className={`flex-col w-screen ${isPaddingsHidden ? '' : 'px-20 py-14'}`}
    >
      <Suspense>
        <Categories />
      </Suspense>
      <h2 className="mb-7 text-[28px] font-semibold leading-[42px] text-primary">
        Популярні товари
      </h2>
      <GoodsList products={products} />
    </div>
  );
}
