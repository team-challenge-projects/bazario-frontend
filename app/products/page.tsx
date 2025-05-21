import React from 'react';

import { ProductCard } from '@/components/ProductCard';

const data = {
  title: 'Dress',
  price: 26,
  rating: {
    score: 1,
    total: 20,
  },
  seller: {
    name: 'John Doe',
    link: '/',
  },
  location: {
    city: 'Lviv',
    region: 'Lvivska obl.',
    distance: 20,
  },
  deliveryMethod: 'Самовивіз',
  images: ['/'],
  publishDate: '2021-01-01',
};
const ProductsPage = () => {
  return (
    <div>
      <ProductCard {...data} />
    </div>
  );
};

export default ProductsPage;
