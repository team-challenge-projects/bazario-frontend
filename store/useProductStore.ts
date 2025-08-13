import { create } from 'zustand';

type Product = {
  title: string;
  description: string;
  price: string;
  deliveryMethods: string[];
  sellerType: 'private' | 'business';
  location: string;
  condition: 'new' | 'used-good' | 'used';
  category: string;
  brand?: string;
  ageGroup?: string[];
  photos?: File[];
};

type ProductStore = {
  products: Product[];
  addProduct: (product: Product) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
}));
