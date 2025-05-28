import { ReactNode, Suspense } from 'react';

import { CategoriesSidebar } from '@/app/categories/CategoriesSidebar';

import { CategoryName } from './CategoryName';

interface CategoriesPageProps {
  children: ReactNode;
}

export default function Layout({ children }: CategoriesPageProps) {
  return (
    <div className="sm:w-[335px] md:w-[728px] lg:w-[864px] xl:w-[1280px] full:w-[1760px]">
      <Suspense>
        <CategoryName />
      </Suspense>
      <div className="flex flex-row">
        <Suspense>
          <CategoriesSidebar />
        </Suspense>

        <main>{children}</main>
      </div>
    </div>
  );
}
