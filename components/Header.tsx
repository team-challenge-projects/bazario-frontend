'use client';

import React, { FC, useState } from 'react';
import { HiOutlineUser } from 'react-icons/hi2';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Button from '@/components/common/Button';
import ButtonLink from '@/components/common/ButtonLink';
import Input from '@/components/common/Input';

const Header: FC = () => {
  const [isSelected, setIsSelected] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={`${
        pathname === '/login' ? 'hidden' : ''
      } mt-[28px] flex h-[58px] w-[1760px] items-center justify-between gap-[28px]`}
    >
      <Image
        src="@/public/BazarioSmall.svg"
        width={58}
        height={58}
        alt={'logo'}
      />
      <div className="flex items-center gap-7">
        <Input
          placeholder={'Search'}
          type={'search'}
          icon={<IoSearchOutline className="h-6 w-6 text-custom-dark-grey" />}
        />
        <div className="flex gap-[14px]">
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
          <HiOutlineUser className="h-8 w-8" />
        </div>
        <div className="flex gap-3.5">
          <Button text={'Додати оголошення'} color={'primary'} />
          <ButtonLink
            text={'Увійти/Зареєструватись'}
            color={'secondary'}
            url={'/login'}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
