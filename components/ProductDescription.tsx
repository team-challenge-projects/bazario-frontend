'use client';

import React, { useState } from 'react';

export const ProductDescription = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const handleOnReadMore = () => {
    setIsReadMore((prev) => !prev);
  };
  return (
    <div className="flex flex-col gap-2">
      <p className={isReadMore ? 'h-fit' : 'h-20 overflow-clip'}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum sunt
        provident ab quod! Id nisi praesentium fuga reiciendis ea. Dolorum eum
        officia, voluptas consequatur iste quae fugit voluptatum molestias
        similique consequuntur, dolor nulla maiores. Ipsam, alias incidunt!
        Explicabo, labore excepturi? Harum quasi, sint nihil deserunt ab labore
        quos qui nesciunt impedit libero ipsam molestiae aut, voluptatum debitis
        nostrum ipsum, eaque rerum reprehenderit consequatur! Ratione aut
        laudantium totam beatae ipsum libero, praesentium natus dolorum, labore
        expedita tenetur corporis. Cum consequuntur vel ipsum eveniet natus qui
        ex quam! Magni, accusamus. Laudantium, fugiat vero reiciendis architecto
        sint ipsam natus atque eum cum dicta!
      </p>
      <button
        type="button"
        onClick={handleOnReadMore}
        className="bg-transparent text-sm font-semibold text-custom-dark-grey"
      >
        {isReadMore ? (
          <div className="flex items-center justify-center gap-2">
            <div>Читати менше</div>
            <div className="h-[6px] w-[6px] translate-y-[1px] -rotate-[135deg] border-b-2 border-r-2 border-custom-dark-grey"></div>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <div>Читати більше</div>
            <div className="h-[6px] w-[6px] -translate-y-[2px] rotate-45 border-b-2 border-r-2 border-custom-dark-grey"></div>
          </div>
        )}
      </button>
    </div>
  );
};
