import React from 'react';

import GoodSmallCard from './GoodSmallCard';

const GoodsList = () => {
  return (
    <div className="mb-28 grid w-full grid-cols-4 gap-x-6 gap-y-4">
      {[...Array(16).keys()].map((item) => (
        <GoodSmallCard key={item} />
      ))}
    </div>
  );
};
export default GoodsList;
