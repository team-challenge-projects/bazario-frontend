import React from 'react';

import GoodSmallCard from './GoodSmallCard';

const GoodsList = () => {
  return (
    <div className="3 mb-28 grid w-full grid-cols-1 gap-x-6 gap-y-4 lg:grid-cols-2 xl:grid-cols-3 full:grid-cols-4">
      {[...Array(16).keys()].map((item) => (
        <GoodSmallCard key={item} />
      ))}
    </div>
  );
};
export default GoodsList;
