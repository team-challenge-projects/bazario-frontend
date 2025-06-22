import React from 'react';

import { Exit } from '@/public/Exit';
import { VectorShines } from '@/public/VectorShines';

import { Button } from '@/components/ui/button';

const Profile = () => {
  const buttonsData = [
    {
      title: 'Контатні дані',
      href: '/profile',
    },
    {
      title: 'Налаштування сповіщень',
      href: '/profile/settings',
    },
    {
      title: 'Управління обліковим записом',
      href: '/profile/settings',
    },
    {
      title: 'Вийти',
      href: '/profile/logout',
    },
  ];
  return (
    <div className="grid h-[calc(100vh-314px-86px)] w-full grid-cols-[1fr_2fr] gap-4 p-4 xl:w-[1280px]">
      <div className="row-span-2">
        <div>Header</div>
        <div className="flex flex-col gap-4 p-4">
          {buttonsData.map((item, index) => (
            <Button
              key={item.title}
              className="bg-custom-light-mint px-5 py-[0.875rem] text-xl font-semibold text-custom-black last:text-custom-dark-grey hover:text-custom-light-mint"
            >
              {index === buttonsData.length - 1 && <Exit />}
              {item.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="tex flex h-[calc(100vh-314px-86px)] w-full flex-col items-center justify-center gap-4">
        <VectorShines />
        <div className="mt-7 text-lg font-medium text-custom-dark-grey opacity-60">
          Оберіть одну з опцій нижче для редагування профілю
        </div>
      </div>
    </div>
  );
};

export default Profile;
