'use client';

import React, { FC } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { BazarioSmall } from '@/public/BazarioSmall';
import Image from 'next/image';
import Link from 'next/link';

import { categoriesName } from '@/lib/categories/categories.data';
import { CATALOG_CATEGORY } from '@/lib/categories/categories.types';

import { Button } from '@/components/ui/button';

interface FooterCategory {
  text: string;
  link: string;
}

const Footer: FC = () => {
  const footerCategories: FooterCategory[] = [
    { text: 'Діти', link: `${categoriesName[CATALOG_CATEGORY.KIDS]}` },
    { text: 'Тварини', link: `${categoriesName[CATALOG_CATEGORY.CREATURES]}` },
    { text: 'Одяг', link: `${categoriesName[CATALOG_CATEGORY.OUTFIT]}` },
    {
      text: 'Електроніка',
      link: `${categoriesName[CATALOG_CATEGORY.ELECTRONICS]}`,
    },
    { text: 'Дім', link: `${categoriesName[CATALOG_CATEGORY.HOME]}` },
    { text: 'Сад', link: `${categoriesName[CATALOG_CATEGORY.GARDEN]}` },
  ];

  const footerHelp: FooterCategory[] = [
    { text: 'Служба підтримки', link: '#' },
    { text: 'Політика конфіденційності', link: '#' },
    { text: 'FAQ', link: '#' },
    { text: 'Реклама', link: '#' },
  ];

  return (
    <footer className="flex h-full w-screen items-center justify-center bg-primary md:h-[314px]">
      <div className="flex sm:flex-col sm:px-5 sm:py-11 md:h-[213px] md:flex-row md:gap-[20px] md:px-0 md:py-0 lg:gap-[109px] xl:w-[860px] full:w-[1083px] full:gap-[294px]">
        <div className="flex w-[299px] items-start gap-[28px] sm:h-[118px] sm:flex-row md:h-[234px] md:flex-col lg:h-[213px]">
          <Image
            src={'/BazarioSmall.svg'}
            width={58}
            height={58}
            alt={'logo'}
          />
          <div className="flex w-full flex-col gap-2">
            <Button variant={'secondary'}>Додати оголошення</Button>
            <Button asChild>
              <Link href="/login">Увійти/Зареєструватись</Link>
            </Button>
          </div>
        </div>
        <div className="flex sm:gap-[16px] xl:gap-[56px] full:gap-[94px]">
          <div className="flex flex-col gap-2">
            {footerCategories.map((category, id) => (
              <Link key={id} href={`/categories?category=${category.link}`}>
                <p className="flex items-center gap-3.5 text-[16px] font-semibold leading-[27px] text-secondary md:text-[18px]">
                  {category.text}{' '}
                  <IoIosArrowDown className="size-[14px] text-secondary" />{' '}
                </p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {footerHelp.map((category, id) => (
              <Link key={id} href={`/category/${category.link}`}>
                <p className="text-[16px] font-semibold leading-[27px] text-secondary md:text-[18px]">
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
