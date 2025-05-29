import { FC } from 'react';

import GoodsList from '@/components/GoodsList';

import { products } from '../../utils/fakeData';

const CategoriesPage: FC = () => {
  return (
    <div>
      <div className="flex">
        <GoodsList products={products} />
      </div>
    </div>
  );
};

export default CategoriesPage;
