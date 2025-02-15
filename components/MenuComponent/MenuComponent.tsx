'use client';

import React, { FC, useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FiLogOut } from 'react-icons/fi';

import Link from 'next/link';

import { data } from '@/lib/menu.data';

import { Button } from '@/components/ui/button';

const MenuComponent: FC<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}> = ({ isOpen, setIsOpen }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  function LogOut() {
    setIsOpen(false);
  }

  return (
    <div className="relative">
      <Menu
        right
        isOpen={isOpen}
        onStateChange={({ isOpen }: { isOpen: boolean }) => setIsOpen(isOpen)}
        noOverlay
        styles={{
          bmMenuWrap: {
            position: 'absolute',
            width: 'fit-content',
            height: 'fit-content',
            top: '60px',
            right: '10px',
          },
          bmMenu: {
            width: '269px',
            height: 'fit-content',
            background: 'white',
            borderRadius: '10px',
            padding: '16px 28px',
            display: 'flex',
            flexDirection: 'column',
          },
          bmItemList: {
            width: '213px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            gap: '16px',
          },
          // bmItem: {
          //   display: 'flex',
          // },
        }}
      >
        {data.map((item, id) => (
          <Link
            key={id}
            href={item.link}
            className="font-poppins text-[18px] font-medium leading-[21px] tracking-[0px] text-primary"
          >
            {item.text}
          </Link>
        ))}
        <Button
          variant={'ghost'}
          size={'logout'}
          onClick={LogOut}
          className="flex h-fit w-fit items-end gap-2 text-custom-dark-grey"
        >
          <FiLogOut className="size-[18px] rotate-180" />
          Вийти
        </Button>
      </Menu>
    </div>
  );
};

export default MenuComponent;
