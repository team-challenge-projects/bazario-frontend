'use client';

import React, { FC, useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { data } from '@/lib/menu.data';
import Link from 'next/link';
import { FiLogOut } from 'react-icons/fi';
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
        onStateChange={({ isOpen }) => setIsOpen(isOpen)}
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
          bmItem: {
            display: 'flex',
          },
        }}
      >
        {data.map((item, id) => (
          <Link
            key={id}
            href={item.link}
            className="font-poppins font-medium text-[18px] leading-[21px] text-primary tracking-[0px] "
          >
            {item.text}
          </Link>
        ))}
        <Button
          variant={'ghost'}
          size={'logout'}
          onClick={LogOut}
          className="text-custom-dark-grey w-fit h-fit flex items-end gap-2"
        >
          <FiLogOut className="size-[18px] rotate-180" />
          Вийти
        </Button>
      </Menu>
    </div>
  );
};

export default MenuComponent;
