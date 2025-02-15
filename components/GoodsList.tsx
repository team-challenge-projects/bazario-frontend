import React from 'react';

import GoodSmallCard from './GoodSmallCard';

const GoodsList = () => {
  return (
    <div className="mb-28 grid w-full grid-cols-4 gap-x-6 gap-y-4">
      {[...Array(16).keys()].map((item) => (
        <GoodSmallCard
          key={item}
          bgImage={`bg-[url('https://picsum.photos/seed/picsum/300/200')]`}
        />
      ))}
    </div>
  );
};
export default GoodsList;
