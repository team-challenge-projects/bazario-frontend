// store/formStore.ts
import { create } from 'zustand';

export type FormData = {
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
};

type ImageDropzoneStore = {
  formData: FormData[];
  preview?: string | null;
  uploadedUrl?: string | null;
  imageUrls?: string[];
  addFormData: (data: FormData) => void;
  setPreview: (preview: string) => void;
  setUploadedUrl: (url: string) => void;
  resetUploadedUrls: () => void;
};

export const useImageDropzoneStore = create<ImageDropzoneStore>((set) => ({
  formData: [],
  preview: null,
  uploadedUrl: null,
  imageUrls: [],
  addFormData: (data) =>
    set((state) => ({
      formData: [...state.formData, data],
    })),
  setPreview: (preview: string) => set({ preview }),
  setUploadedUrl: (url: string) => {
    set({ uploadedUrl: url });
    set((state) => ({
      imageUrls: [...(state.imageUrls || []), url],
    }));
  },
  resetUploadedUrls: () => set({ imageUrls: [] }),
}));
