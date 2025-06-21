import { FC } from 'react';

import { Exit } from '@/public/Exit';
import Link from 'next/link';

const ProfileList: FC = () => {
  const points = [
    { id: 1, title: 'Налаштування профілю', link: '/profile/1' },
    { id: 2, title: 'Мої оголошення', link: '/' },
    { id: 3, title: 'Мій рейтинг і відгуки', link: '/' },
    { id: 4, title: 'Служба підтримки', link: '/' },
    { id: 5, title: 'Вийти', link: '/' },
  ];

  return (
    <ul className="absolute right-0 top-11 flex w-fit flex-col gap-4 rounded-lg border-custom-light-grey bg-white px-7 py-8 text-lg font-medium text-custom-black shadow-lg">
      {points.map(({ id, title, link }) => (
        <li
          key={id}
          className={`w-fit cursor-pointer text-nowrap ${id === 5 && 'text-custom-dark-grey'}`}
        >
          <Link href={link} className="flex items-center gap-2">
            {id === 5 && <Exit />} {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProfileList;
