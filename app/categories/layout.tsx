'use client';

// import { useSearchParams } from 'next/navigation';
// import { categoriesName } from '@/lib/categories/categories.data';
import { CategoriesSidebar } from '@/components/CategoriesSidebar';

interface CategoriesPageProps {
  children: React.ReactNode;
}

export default function Layout({ children }: CategoriesPageProps) {
  // const searchParams = useSearchParams();
  // const category =
  //   (searchParams.get('category') as keyof typeof categoriesName) || '';
  return (
    <div className="sm:w-[335px] md:w-[728px] lg:w-[864px] xl:w-[1280px] full:w-[1760px]">
      {/* <h1 className="mb-11 text-2xl font-bold">{categoriesName[category]}</h1> */}
      <div className="flex flex-row">
        <CategoriesSidebar />

        <main className="w-full pt-8">{children}</main>
      </div>
    </div>
  );
}
