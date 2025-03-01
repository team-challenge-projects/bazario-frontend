import { SidebarItems } from '@/lib/Sidebar.types';

export const sidebarItems: SidebarItems = {
  Рейтинг: [
    {
      id: 1,
      name: 'Найвищий',
    },
    {
      id: 2,
      name: 'Середній',
    },
  ],

  Стан: [
    {
      id: 1,
      name: 'Новий',
    },
    {
      id: 2,
      name: 'В гарному стані',
    },
    {
      id: 3,
      name: 'Довго уживаний',
    },
  ],
  Бренд: [
    {
      id: 1,
      name: 'Sumsung',
    },
    {
      id: 2,
      name: 'Apple',
    },
    {
      id: 3,
      name: 'Xiaomi',
    },
  ],
  Місцезнаходження: [
    { id: 1, name: 'Київська обл.' },
    { id: 2, name: 'Чернігівська обл.' },
    { id: 3, name: 'Львівська обл.' },
  ],
};
