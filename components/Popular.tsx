import React, { FC } from 'react';
import ProductCard from '@/components/ProductCard/ProductCard';

const Popular: FC = () => {
  return (
    <div className="h-full bg-transparent my-[56px] flex flex-col gap-[14px]">
      <p className="text-[28px] font-semibold leading-[42px] text-primary">
        Популярні товари
      </p>
      <ProductCard />
    </div>
  );
};

export default Popular;
