interface CategoryTypes {
  id: number;
  text: string;
  link: string;
}

export const data: CategoryTypes[] = [
  {
    id: 1,
    text: 'Додати оголошення',
    link: '#',
  },
  {
    id: 2,
    text: 'Вподобане',
    link: '#',
  },
  {
    id: 3,
    text: 'Налаштування профілю',
    link: '#',
  },
  {
    id: 4,
    text: 'Мої оголошення',
    link: '#',
  },
  {
    id: 5,
    text: 'Мій рейтинг і відгуки',
    link: '#',
  },
  {
    id: 6,
    text: 'Служба підтримки',
    link: '#',
  },
] as const;
