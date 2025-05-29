import React from 'react';

import { Product } from '@/lib/ProductCard.types';

import ProductCard from './ProductCard/ProductCard';

// Adjust the import path as necessary for your project
const GoodsList = ({ products }: { products: Product[] }) => {
  return (
    <div className="3 mb-28 grid w-full grid-cols-1 gap-x-6 gap-y-4 lg:grid-cols-2 xl:grid-cols-3 full:grid-cols-4">
      {products.map((item) => (
        <ProductCard data={item} key={item.id} />
      ))}
    </div>
  );
};
export default GoodsList;
