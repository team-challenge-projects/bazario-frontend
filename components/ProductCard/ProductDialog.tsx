'use client';

import React, { FC, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { FaHryvnia, FaRegStar, FaStar } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { Product } from '@/lib/ProductCard.types';

interface ProductDialogProps {
  data: Product;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ProductDialog: FC<ProductDialogProps> = ({ open, setOpen, data }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[1064px] h-[587px] rounded-[40px] bg-secondary flex gap-[28px]">
        <Image
          src={data.image}
          alt={data.name}
          width={510}
          height={530}
          className="rounded-[20px] object-cover w-[510px] h-[530px]"
        />
        <div className="flex flex-1 flex-col gap-3.5">
          <DialogHeader>
            <DialogTitle className="text-primary font-semibold text-[28px] leading-[42px]">
              {data.name}
            </DialogTitle>
            <DialogDescription className="w-full h-[164px]">
              Опис товару
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-1 text-primary font-semibold text-[28px] leading-[42px]">
              {data.price} <FaHryvnia className="size-[20px]" />
            </span>
            <div className="flex gap-2 items-center text-custom-dark-grey font-medium text-[14px] leading-[16px]">
              <div className="relative flex items-center justify-center">
                <FaRegStar className="size-[18px] absolute" />
                <FaStar className="size-[17px] text-custom-yellow" />
              </div>
              <span>{data.rating}/10</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-primary font-semibold text-[18px] leading-[27px]">
              Спосіб доставки:{' '}
              <span className="font-medium text-[18px] leading-[22px]">
                Самовивіз
              </span>
            </p>
            <p className="text-primary font-semibold text-[18px] leading-[27px]">
              Місцезнаходження:{' '}
              <span className="font-medium text-[18px] leading-[22px]">
                Львів, Львівська обл.
              </span>
            </p>
            <p className="text-primary font-semibold text-[18px] leading-[27px]">
              Дата публікації:{' '}
              <span className="font-medium text-[18px] leading-[22px]">
                {data.date}
              </span>
            </p>
          </div>
          <Button>Переглянути контакти продавця</Button>
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
            <span className="text-primary font-medium text-[20px] leading-[30px]">
              {isSelected ? 'Товар у обраному' : 'Додати товар до обраного'}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
