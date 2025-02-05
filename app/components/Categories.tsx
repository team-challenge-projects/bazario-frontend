"use client";
import React, { FC } from "react";
import { data } from "@/app/lib/categories/categories.data";
import Link from "next/link";

const Categories: FC = () => {
  const [hovered, setHovered] = React.useState<number | null>();
  const [selected, setSelected] = React.useState<number | null>();
  return (
    <div className='flex flex-col gap-[14px] my-[56px]'>
      <p className='text-primary font-semibold text-[28px] leading-[42px]'>
        Категорії
      </p>
      <div className='flex gap-[20px]'>
        {data.map((category) => (
          <Link
            href={`/category/${category.category}`}
            key={category.id}
            className={`${hovered === category.id ? "scale-110" : ""} ${
              selected === category.id ? "bg-[#BCF0E699]" : "bg-custom-mint"
            } bg-custom-mint flex flex-col justify-center items-center gap-[14px] w-[276px] h-[197px]  border-[1px] border-primary rounded-[20px]`}
            onMouseEnter={() => setHovered(category.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(category.id)}>
            <category.icon
              color='black'
              className='size-[56px]'
            />
            <p className='text-black capitalize '>{category.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
