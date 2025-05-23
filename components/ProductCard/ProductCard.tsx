'use client';

import React, { FC, useState, useRef } from 'react';
import Image from 'next/image';
import { FaHryvnia } from 'react-icons/fa';
import ProductDialog from '@/components/ProductCard/ProductDialog';
import { Product } from '@/lib/ProductCard.types';

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
      className="w-[303px] h-[269px] flex flex-col rounded-t-[20px] gap-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={data.image}
        width={303}
        height={206}
        alt={data.name}
        className="w-full h-[206px] rounded-[20px] object-cover"
      />
      <div className="w-full flex flex-col gap-1">
        <div className="flex justify-between text-primary font-semibold text-[18px] leading-[27px]">
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
