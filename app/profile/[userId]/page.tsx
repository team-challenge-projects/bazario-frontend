'use client';

import { useEffect, useState } from 'react';

import { ChangeIcon } from '@/public/ChangeIcon';
import { Exit } from '@/public/Exit';
import { IUser } from '@/types/user';
import { useRouter } from 'next/navigation';

import { ImageDropzone } from '@/components/ImageDropzone';
import { ProfileForm } from '@/components/ProfileForm/ProfileForm';
import { ProfileManagement } from '@/components/ProfileManagement';
import { ProfileMessages } from '@/components/ProfileMessages';
import { StartProfilePage } from '@/components/StartProfilePage';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const Profile = () => {
  const [isChecked, setIsChecked] = useState(0);
  const [user, setUser] = useState({} as IUser);
  const router = useRouter();
  const [isAvatarClicked, setIsAvatarClicked] = useState<boolean>(false);
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
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/login');
    } else {
      const parsedUser = JSON.parse(user) as IUser;
      setUser(parsedUser);
    }
  }, []);

  const profileOptions = [
    <StartProfilePage />,
    <ProfileForm user={user} />,
    <ProfileMessages />,
    <ProfileManagement />,
  ];

  return (
    <>
      {' '}
      {isAvatarClicked && (
        <ImageDropzone id={user?.id || ''} handleOnClick={setIsAvatarClicked} />
      )}
      <div className="relative mt-[52px] grid min-h-[calc(100vh-314px-86px)] w-full grid-cols-[1fr_2fr] gap-4 p-4 xl:mx-auto xl:w-[1280px]">
        <div className="row-span-2">
          <div className="mb-7">
            <div className="mb-1 flex flex-row items-center gap-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={user?.avatar || '/avatar.jpg'} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="text-3xl font-semibold">{user?.firstName}</div>
              <ChangeIcon />
            </div>
            <div
              className="cursor-pointer text-sm font-semibold text-custom-dark-grey/60"
              onClick={() => setIsAvatarClicked((prev) => !prev)}
            >
              Змінити фото
            </div>
          </div>
          <div className="flex flex-col gap-4 p-4">
            {buttonsData.map((item, index) => (
              <Button
                key={item.title}
                className={`shadow-secondaryShadow rounded-lg bg-custom-light-mint px-5 py-[0.875rem] text-xl font-semibold text-custom-black last:text-custom-dark-grey ${isChecked === item.id && item.id !== 4 && 'h-[116px] bg-white'}`}
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
    </>
  );
};

export default Profile;
