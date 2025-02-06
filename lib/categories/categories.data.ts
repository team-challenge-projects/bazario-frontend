import React from 'react';
import {
  PiArmchairLight,
  PiBabyCarriageLight,
  PiDeviceMobileLight,
  PiFishLight,
  PiTShirtLight,
  PiTreeLight,
} from 'react-icons/pi';

import { CATALOG_CATEGORY } from '@/lib/categories/categories.types';

interface CategoryTypes {
  id: number;
  category: CATALOG_CATEGORY;
  icon: React.ElementType;
}

export const data: CategoryTypes[] = [
  {
    id: 1,
    category: CATALOG_CATEGORY.KIDS,
    icon: PiBabyCarriageLight,
  },
  {
    id: 2,
    category: CATALOG_CATEGORY.CREATURES,
    icon: PiFishLight,
  },
  {
    id: 3,
    category: CATALOG_CATEGORY.OUTFIT,
    icon: PiTShirtLight,
  },
  {
    id: 4,
    category: CATALOG_CATEGORY.ELECTRONICS,
    icon: PiDeviceMobileLight,
  },
  {
    id: 5,
    category: CATALOG_CATEGORY.HOME,
    icon: PiArmchairLight,
  },
  {
    id: 6,
    category: CATALOG_CATEGORY.GARDEN,
    icon: PiTreeLight,
  },
] as const;
