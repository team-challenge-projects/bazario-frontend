'use client';

import { FC, useState } from 'react';

import Link from 'next/link';

import { data } from '@/lib/categories/categories.data';

const Categories: FC = () => {
  const [hovered, setHovered] = useState<number | null>();
  const [selected, setSelected] = useState<number | null>();
  return (
    <div className="my-[56px] flex flex-col gap-[14px] sm:w-[335px] md:w-[728px] lg:w-[864px] xl:w-[1282px] full:w-[1760px] ">
      <p className="text-[28px] font-semibold leading-[42px] text-primary">
        Категорії
      </p>
      <div className="flex flex-wrap sm:gap-[10px] md:gap-[20px]">
        {data.map((category) => (
          <Link
            href={`/categories?category=${category.category}`}
            key={category.id}
            className={`${hovered === category.id ? 'scale-110' : ''} ${
              selected === category.id ? 'bg-[#BCF0E699]' : 'bg-custom-mint'
            } flex flex-col items-center justify-center gap-[14px] rounded-[20px] border-[1px] border-primary bg-custom-mint sm:h-[112px] sm:w-[162px] md:h-[167px] md:w-[229px] lg:h-[197px] lg:w-[274px] xl:size-[197px] full:h-[197px] full:w-[276px]`}
            onMouseEnter={() => setHovered(category.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(category.id)}
          >
            <category.icon
              color="black"
              className="sm:size-[44px] md:size-[56px]"
            />
            <p className="capitalize text-black">{category.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
