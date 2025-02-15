import React from 'react';

import GoodSmallCard from './GoodSmallCard';

const GoodsList = () => {
  return (
    <>
      {' '}
      <h2 className="mb-7 text-[28px] font-semibold leading-[42px] text-primary">
        Популярні товари
      </h2>
      <div className="mb-28 grid w-full grid-cols-4 gap-x-6 gap-y-4">
        {[...Array(16).keys()].map((item) => (
          <GoodSmallCard key={item} />
        ))}
      </div>
    </>
  );
};
export default GoodsList;
