import { ReactNode } from 'react';

import { SellerSidebar } from '@/components/SellerSidebar';

const sellersLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="sm:w-[335px] md:w-[728px] lg:w-[864px] xl:w-[1280px] full:w-[1760px]">
      <div className="mb-4 mt-[56px] flex flex-row">
        <h1 className="text-3xl font-semibold text-custom-black">
          Ім'я продавця
        </h1>
      </div>
      <div className="flex flex-row">
        <SellerSidebar />
        <main className="ml-5 w-full">{children}</main>
      </div>
    </div>
  );
};

export default sellersLayout;
