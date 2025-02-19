import React, { FC } from 'react';
import ProductCard from '@/components/ProductCard/ProductCard';
import { Product } from '@/lib/ProductCard.types';
import test from '@/public/garden.jpg';

const Popular: FC = () => {
  const product: Product = {
    id: '1',
    name: 'Назва товару',
    price: 70,
    image: test.src,
    date: '12 грудня 2025',
    rating: 7,
  };
  return (
    <div className="h-full bg-transparent my-[56px] flex flex-col gap-[14px]">
      <p className="text-[28px] font-semibold leading-[42px] text-primary">
        Популярні товари
      </p>
      <ProductCard data={product} />
    </div>
  );
};

export default Popular;
