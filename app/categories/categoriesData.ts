import { SidebarItems } from '@/lib/Sidebar.types';

export const categories: SidebarItems = {
  rating: [
    { id: 'highest', label: 'Найвищий' },
    { id: 'medium', label: 'Середній' },
  ],
  condition: [
    { id: 'new', label: 'Новий' },
    { id: 'good', label: 'В гарному стані' },
    { id: 'used', label: 'Довго уживаний' },
  ],
  brand: [
    { id: 'samsung', label: 'Samsung' },
    { id: 'apple', label: 'Apple' },
    { id: 'xiaomi', label: 'Xiaomi' },
  ],
  location: [
    { id: 'kyiv', label: 'Київська обл.' },
    { id: 'chernihiv', label: 'Чернігівська обл.' },
    { id: 'lviv', label: 'Львівська обл.' },
  ],
  deliveryMethod: [
    { id: 'nova_poshta', label: 'Новою поштою' },
    { id: 'pickup', label: 'Самовивіз' },
    { id: 'ukrposhta', label: 'Укрпоштою' },
  ],
  color: [
    { id: 'blue', label: 'Блакитний' },
    { id: 'dark_blue', label: 'Синій' },
    { id: 'red', label: 'Червоний' },
  ],
  childAge: [
    { id: 'age_0_5', label: '0 - 0.5 року' },
    { id: 'age_0_5_1', label: '0.5 - 1 рік' },
    { id: 'age_1_2', label: '1 - 2 роки' },
  ],
  material: [
    { id: 'leather', label: 'Шкіра' },
    { id: 'polyester', label: 'Поліестер' },
    { id: 'plastic', label: 'Пластик' },
  ],
  size: [
    { id: 'xxs', label: 'XXS' },
    { id: 'xs', label: 'XS' },
    { id: 's', label: 'S' },
  ],
};
export function getCategoryLabel(category: string) {
  switch (category) {
    case 'rating':
      return 'Рейтинг';
    case 'condition':
      return 'Стан';
    case 'brand':
      return 'Бренд';
    case 'location':
      return 'Місцезнаходження';
    case 'deliveryMethod':
      return 'Спосіб доставки';
    case 'color':
      return 'Колір';
    case 'childAge':
      return 'Вік дитини';
    case 'material':
      return 'Матеріал';
    case 'size':
      return 'Розмір';
    default:
      return category;
  }
}
