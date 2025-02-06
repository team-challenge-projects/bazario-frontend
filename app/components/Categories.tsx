'use client';

import React, { FC } from 'react';

import Link from 'next/link';

import { data } from '@/app/lib/categories/categories.data';

const Categories: FC = () => {
  const [hovered, setHovered] = React.useState<number | null>();
  const [selected, setSelected] = React.useState<number | null>();
  return (
    <div className="my-[56px] flex flex-col gap-[14px]">
      <p className="text-[28px] font-semibold leading-[42px] text-primary">
        Категорії
      </p>
      <div className="flex gap-[20px]">
        {data.map((category) => (
          <Link
            href={`/category/${category.category}`}
            key={category.id}
            className={`${hovered === category.id ? 'scale-110' : ''} ${
              selected === category.id ? 'bg-[#BCF0E699]' : 'bg-custom-mint'
            } flex h-[197px] w-[276px] flex-col items-center justify-center gap-[14px] rounded-[20px] border-[1px] border-primary bg-custom-mint`}
            onMouseEnter={() => setHovered(category.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(category.id)}
          >
            <category.icon color="black" className="size-[56px]" />
            <p className="capitalize text-black">{category.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
