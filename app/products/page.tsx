'use client';

import React from 'react';

import { useProductStore } from '@/store/useProductStore';

const ProductsPage = () => {
  const products = useProductStore((state) => state.products);
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.title}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
