import { FC } from 'react';

import { Exit } from '@/public/Exit';
import { useUserStore } from '@/store/useUserStore';
import Link from 'next/link';

interface ProfileListProps {
  isClickedList: () => void;
}

const ProfileList: FC<ProfileListProps> = ({ isClickedList }) => {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  if (!user) return;
  const points = [
    { id: 1, title: 'Налаштування профілю', link: `/profile/${user?.id}` },
    { id: 2, title: 'Мої оголошення', link: '/' },
    { id: 3, title: 'Мій рейтинг і відгуки', link: '/' },
    { id: 4, title: 'Служба підтримки', link: '/' },
    { id: 5, title: 'Вийти', link: '/' },
  ];
  return (
    <ul className="absolute right-0 top-11 z-10 flex w-fit flex-col gap-4 rounded-lg border-custom-light-grey bg-white px-7 py-8 text-lg font-medium text-custom-black shadow-lg">
      {points.map(({ id, title, link }) => (
        <li
          key={id}
          className={`w-fit cursor-pointer text-nowrap ${id === 5 && 'text-custom-dark-grey'}`}
          onClick={isClickedList}
        >
          {id === 5 ? (
            <Link
              href={link}
              className="flex items-center gap-2"
              onClick={logout}
            >
              <Exit />
              {title}
            </Link>
          ) : (
            <Link href={link} className="flex items-center gap-2">
              {title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProfileList;
