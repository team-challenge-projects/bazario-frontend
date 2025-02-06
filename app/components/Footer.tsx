'use client';

import React, { FC } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import logo from '@/public/BazarioSmall.svg';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/app/components/common/Button';

interface FooterCategory {
  text: string;
  link: string;
}

const Footer: FC = () => {
  const footerCategories: FooterCategory[] = [
    { text: 'Діти', link: '#' },
    { text: 'Тварини', link: '#' },
    { text: 'Одяг', link: '#' },
    { text: 'Електроніка', link: '#' },
    { text: 'Дім', link: '#' },
    { text: 'Сад', link: '#' },
  ];

  const footerHelp: FooterCategory[] = [
    { text: 'Служба підтримки', link: '#' },
    { text: 'Політика конфіденційності', link: '#' },
    { text: 'FAQ', link: '#' },
    { text: 'Реклама', link: '#' },
  ];

  return (
    <footer className="flex h-[314px] w-screen items-center justify-center bg-primary">
      <div className="flex w-[1089px] gap-[294px]">
        <div className="flex w-[299px] flex-col gap-[28px]">
          <Image src="@/public/Bazario.svg" alt={'logo'} />
          <Button text={'Додати оголошення'} color={'secondary'} />
          <Button text={'Увійти/Зареєструватись'} color={'primary'} />
        </div>
        <div className="flex gap-[56px]">
          <div className="flex flex-col gap-2">
            {footerCategories.map((category, id) => (
              <Link key={id} href={`#`}>
                <p className="flex items-center gap-3.5 text-[18px] font-semibold leading-[27px] text-secondary">
                  {category.text}{' '}
                  <IoIosArrowDown className="size-[14px] text-secondary" />{' '}
                </p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {footerHelp.map((category, id) => (
              <Link key={id} href={`/category/${category.link}`}>
                <p className="text-[18px] font-semibold leading-[27px] text-secondary">
                  {category.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
