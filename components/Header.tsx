'use client';

import React, { FC, useState } from 'react';
import { HiOutlineUser } from 'react-icons/hi2';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';

import Hamburger from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import MenuComponent from '@/components/MenuComponent/MenuComponent';
import Input from '@/components/common/Input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const Header: FC = () => {
  const [isSelected, setIsSelected] = useState(false);
  const pathname = usePathname();
  const [isAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header
      className={`${
        pathname === '/login' ? 'hidden' : ''
      } mt-[28px] flex h-[58px] items-center justify-between gap-[28px] sm:w-[335px] md:w-[728px] lg:w-[864px] xl:w-[1280px] full:w-[1760px]`}
    >
      <Link href={'/'}>
        <Image
          src={'@/public/BazarioSmall.svg'}
          width={58}
          height={58}
          alt="logo"
        />
      </Link>
      <div className="flex items-center gap-7">
        <Input
          placeholder="Search"
          type="search"
          icon={<IoSearchOutline className="h-6 w-6 text-custom-dark-grey" />}
          disabled={isOpen}
        />
        <IoSearchOutline className="h-6 w-6 text-custom-dark-grey sm:block md:hidden" />
        <div className="sm:flex lg:hidden">
          <Hamburger
            size={24}
            distance="sm"
            rounded
            label="Show menu"
            toggled={isOpen}
            toggle={() => setIsOpen((prev) => !prev)}
          />
          {isOpen ? (
            <MenuComponent isOpen={isOpen} setIsOpen={setIsOpen} />
          ) : null}
        </div>
        <div className="flex items-center gap-7 sm:hidden lg:flex">
          <div className="flex gap-[14px]">
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
            {isAuthenticated ? (
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ) : (
              <Button variant="ghost" size="icon">
                <HiOutlineUser className="h-8 w-8" />
              </Button>
            )}
          </div>
          <div className="flex gap-3.5">
            <Button>Додати оголошення</Button>
            <Button asChild variant="secondary">
              <Link href="/login">Увійти/Зареєструватись</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
