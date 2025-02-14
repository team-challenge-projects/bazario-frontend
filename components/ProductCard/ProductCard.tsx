'use client';

import React, { FC, useState } from 'react';
import Image from 'next/image';
import test from '@/public/test.svg';
import { FaHryvnia, FaRegStar, FaStar } from 'react-icons/fa';

const ProductCard: FC = () => {
  const [hovered, setHovered] = useState(false);
  function Hover() {
    setTimeout(() => setHovered(true), 1000);
  }
  return (
    <div
      className="w-[303px] h-[269px] flex flex-col rounded-t-[20px] gap-2"
      onMouseEnter={() => Hover()}
      onMouseLeave={() => setHovered(false)}
    >
      <>
        <Image
          src={'@/public/test.svg'}
          alt="test"
          className="w-full h-[206px] block rounded-[20px] object-cover"
        />
        <div className="w-full flex flex-col gap-1">
          <div className="flex justify-between text-primary font-semibold text-[18px] leading-[27px]">
            <span>Назва товару</span>
            <span className="flex items-center gap-1">
              70 <FaHryvnia className="size-[15px]" />
            </span>
          </div>
          <div className="flex justify-between text-custom-dark-grey font-medium text-[14px] leading-[16px]">
            <span>12 грудня 2025</span>
            <div className="flex gap-2 items-center">
              <div className="relative flex items-center justify-center">
                <FaRegStar className="size-[18px] absolute" />
                <FaStar className="size-[17px] text-custom-yellow" />
              </div>
              <span>7/10</span>
            </div>
          </div>
        </div>
      </>
      {hovered && (
        <div className="w-screen h-screen z-50 flex items-center justify-center">
          {' '}
          Hovered
        </div>
      )}
    </div>
  );
};

export default ProductCard;
