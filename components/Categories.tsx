'use client';

import { FC, useState } from 'react';

import Link from 'next/link';

import { data } from '@/lib/categories/categories.data';

const Categories: FC = () => {
  const [hovered, setHovered] = useState<number | null>();
  const [selected, setSelected] = useState<number | null>();
  return (
    <div className=" full:w-[1760px] xl:w-[1282px] lg:w-[864px] md:w-[728px] sm:w-[335px] my-[56px] flex flex-col gap-[14px]">
      <p className="text-[28px] font-semibold leading-[42px] text-primary">
        Категорії
      </p>
      <div className="flex md:gap-[20px] sm:gap-[10px] flex-wrap">
        {data.map((category) => (
          <Link
            href={`/category/${category.category}`}
            key={category.id}
            className={`${hovered === category.id ? 'scale-110' : ''} ${
              selected === category.id ? 'bg-[#BCF0E699]' : 'bg-custom-mint'
            } flex full:h-[197px] full:w-[276px] xl:size-[197px] lg:h-[197px] lg:w-[274px] md:h-[167px] md:w-[229px] sm:h-[112px] sm:w-[162px] flex-col items-center justify-center gap-[14px] rounded-[20px] border-[1px] border-primary bg-custom-mint`}
            onMouseEnter={() => setHovered(category.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(category.id)}
          >
            <category.icon
              color="black"
              className="md:size-[56px] sm:size-[44px]"
            />
            <p className="capitalize text-black">{category.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
