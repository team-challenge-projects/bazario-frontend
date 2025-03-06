import { Suspense } from 'react';

import { CategoriesSidebar } from '@/app/categories/CategoriesSidebar';

import { CategoryName } from './CategoryName';

interface CategoriesPageProps {
  children: React.ReactNode;
}

export default function Layout({ children }: CategoriesPageProps) {
  return (
    <div className="sm:w-[335px] md:w-[728px] lg:w-[864px] xl:w-[1280px] full:w-[1760px]">
      <Suspense>
        <CategoryName />
      </Suspense>
      <div className="flex flex-row">
        <CategoriesSidebar />

        <main className="w-full">{children}</main>
      </div>
    </div>
  );
}
