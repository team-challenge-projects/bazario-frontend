'use client';

import { useState } from 'react';

import { Exit } from '@/public/Exit';
import { useRouter } from 'next/navigation';

import { ProfileForm } from '@/components/ProfileForm';
import { ProfileManagement } from '@/components/ProfileManagement';
import { ProfileMessages } from '@/components/ProfileMessages';
import { StartProfilePage } from '@/components/StartProfilePage';
import { Button } from '@/components/ui/button';

const Profile = () => {
  const [isChecked, setIsChecked] = useState(0);
  const router = useRouter();
  const buttonsData = [
    {
      id: 1,
      title: 'Контатні дані',
      href: '/profile',
      handleOnClick: (id: number) => setIsChecked(id),
    },
    {
      id: 2,
      title: 'Налаштування сповіщень',
      href: '/profile/settings',
      handleOnClick: (id: number) => setIsChecked(id),
    },
    {
      id: 3,
      title: 'Управління обліковим записом',
      href: '/profile/settings',
      handleOnClick: (id: number) => setIsChecked(id),
    },
    {
      id: 4,
      title: 'Вийти',
      href: '/profile/logout',
      handleOnClick: () => router.push('/'),
    },
  ];

  const profileOptions = [
    <StartProfilePage />,
    <ProfileForm />,
    <ProfileMessages />,
    <ProfileManagement />,
  ];

  return (
    <div className="grid min-h-[calc(100vh-314px-86px)] w-full grid-cols-[1fr_2fr] gap-4 p-4 xl:w-[1280px]">
      <div className="row-span-2">
        <div>Header</div>
        <div className="flex flex-col gap-4 p-4">
          {buttonsData.map((item, index) => (
            <Button
              key={item.title}
              className={`shadow-secondaryShadow rounded-lg bg-custom-light-mint px-5 py-[0.875rem] text-xl font-semibold text-custom-black last:text-custom-dark-grey hover:text-custom-light-mint ${isChecked === item.id && item.id !== 4 && 'h-[116px] bg-white'}`}
              onClick={() => item.handleOnClick(item.id)}
            >
              {index === buttonsData.length - 1 && <Exit />}
              {item.title}
            </Button>
          ))}
        </div>
      </div>
      {profileOptions[isChecked]}
    </div>
  );
};

export default Profile;
