'use client';

import React, { FC, useState } from 'react';
import { FaHryvnia, FaRegStar, FaStar } from 'react-icons/fa';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';

import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/lib/ProductCard.types';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ProductDialogProps {
  data: Product;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ProductDialog: FC<ProductDialogProps> = ({ open, setOpen, data }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="flex h-[587px] w-[1064px] gap-[28px] rounded-[40px] bg-secondary">
        <Image
          src={data.image}
          alt={data.name}
          width={510}
          height={530}
          className="h-[530px] w-[510px] rounded-[20px] object-cover"
        />
        <div className="flex flex-1 flex-col gap-3.5">
          <DialogHeader>
            <DialogTitle className="text-[28px] font-semibold leading-[42px] text-primary">
              <Link href={`/products/${data.id}`}> {data.name}</Link>
            </DialogTitle>
            <DialogDescription className="h-[164px] w-full">
              Опис товару
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-1 text-[28px] font-semibold leading-[42px] text-primary">
              {data.price} <FaHryvnia className="size-[20px]" />
            </span>
            <div className="flex items-center gap-2 text-[14px] font-medium leading-[16px] text-custom-dark-grey">
              <div className="relative flex items-center justify-center">
                <FaRegStar className="absolute size-[18px]" />
                <FaStar className="size-[17px] text-custom-yellow" />
              </div>
              <span>{data.rating}/10</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[18px] font-semibold leading-[27px] text-primary">
              Спосіб доставки:{' '}
              <span className="text-[18px] font-medium leading-[22px]">
                Самовивіз
              </span>
            </p>
            <p className="text-[18px] font-semibold leading-[27px] text-primary">
              Місцезнаходження:{' '}
              <span className="text-[18px] font-medium leading-[22px]">
                Львів, Львівська обл.
              </span>
            </p>
            <p className="text-[18px] font-semibold leading-[27px] text-primary">
              Дата публікації:{' '}
              <span className="text-[18px] font-medium leading-[22px]">
                {data.date}
              </span>
            </p>
          </div>
          <Button asChild>
            <Link href="/product">Переглянути контакти продавця</Link>
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              {!isSelected ? (
                <IoMdHeartEmpty
                  className="h-8 w-8 cursor-pointer hover:text-red-500"
                  onClick={() => setIsSelected(true)}
                />
              ) : (
                <div
                  className="relative flex h-8 w-8 cursor-pointer items-center justify-center"
                  onClick={() => setIsSelected(false)}
                >
                  <IoMdHeartEmpty className="absolute h-8 w-8" />
                  <IoMdHeart className="h-7 w-7 text-red-500" />
                </div>
              )}
            </Button>
            <span className="text-[20px] font-medium leading-[30px] text-primary">
              {isSelected ? 'Товар у обраному' : 'Додати товар до обраного'}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
