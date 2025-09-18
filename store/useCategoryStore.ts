import { ICategory } from '@/types';
import { create } from 'zustand';

import { getCategories } from '@/app/services';

type CategoryState = {
  categories: ICategory[] | null;
  fetchCategories: () => Promise<void>;
};

export const useCategoryStore = create<CategoryState>((set) => ({
  categories: null,
  fetchCategories: async () => {
    const data = await getCategories();
    set({ categories: data });
  },
}));
