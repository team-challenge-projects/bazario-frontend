import { Product } from '@/types/product';
import { create } from 'zustand';

type ProductStore = {
  products: Product[];
  newProduct: Product;
  patchAdvert: (product: Product, id: string | undefined) => Promise<void>;
  fetchAdverts: () => Promise<void>;
  addAdvert: () => Promise<Product | undefined>;
};

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  newProduct: {} as Product,
  patchAdvert: async (product, id) => {
    if (!id) {
      throw new Error('Product ID is required for patching');
    }
    const response = await fetch(`/api/advert/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    if (response.ok) {
      await get().fetchAdverts();
    }
  },
  fetchAdverts: async () => {
    const response = await fetch(`/api/adverts`);
    const data = (await response.json()) as Product[];
    set({ products: data });
  },
  addAdvert: async () => {
    const response = await fetch(`/api/advert`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = (await response.json()) as Product;
    set({ newProduct: data });
    return data;
  },
}));
