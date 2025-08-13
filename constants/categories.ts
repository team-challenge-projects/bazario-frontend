import { Category } from '@/types/product';

export const CATEGORIES: Category[] = [
  {
    id: 'toys',
    name: 'Іграшки та дитячі товари',
    subcategories: [
      { id: 'educational-toys', name: 'Розвиваючі іграшки' },
      { id: 'dolls', name: 'Ляльки та аксесуари' },
      { id: 'construction', name: 'Конструктори' },
      { id: 'vehicles', name: 'Машинки та транспорт' },
    ],
  },
  {
    id: 'electronics',
    name: 'Електроніка',
    subcategories: [
      { id: 'phones', name: 'Телефони' },
      { id: 'computers', name: "Комп'ютери та ноутбуки" },
      { id: 'tablets', name: 'Планшети' },
      { id: 'audio', name: 'Аудіо техніка' },
    ],
  },
  {
    id: 'clothing',
    name: 'Одяг та взуття',
    subcategories: [
      { id: 'men-clothing', name: 'Чоловічий одяг' },
      { id: 'women-clothing', name: 'Жіночий одяг' },
      { id: 'children-clothing', name: 'Дитячий одяг' },
      { id: 'shoes', name: 'Взуття' },
    ],
  },
];
