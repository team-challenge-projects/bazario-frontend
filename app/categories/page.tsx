import { FC } from 'react';

import GoodsList from '@/components/GoodsList';

const CategoriesPage: FC = () => {
  return (
    <div>
      <div className="flex">
        <GoodsList />
      </div>
    </div>
  );
};

export default CategoriesPage;
