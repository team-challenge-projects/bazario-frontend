'use client';

import React, { FC, useRef, useState } from 'react';
import { FaHryvnia } from 'react-icons/fa';

import Image from 'next/image';

import { Product } from '@/lib/ProductCard.types';

import ProductDialog from '@/components/ProductCard/ProductDialog';

interface ProductCardProps {
  data: Product;
}

const ProductCard: FC<ProductCardProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    hoverTimeout.current = setTimeout(() => setOpen(true), 1000);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
    setOpen(false);
  };

  return (
    <div
      className="flex h-[269px] w-[303px] flex-col gap-2 rounded-t-[20px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={data.image}
        width={303}
        height={206}
        alt={data.name}
        className="h-[206px] w-full rounded-[20px] object-cover"
      />
      <div className="flex w-full flex-col gap-1">
        <div className="flex justify-between text-[18px] font-semibold leading-[27px] text-primary">
          <span>{data.name}</span>
          <span className="flex items-center gap-1">
            {data.price} <FaHryvnia className="size-[15px]" />
          </span>
        </div>
      </div>
      <ProductDialog open={open} setOpen={setOpen} data={data} />
    </div>
  );
};

export default ProductCard;
