'use client';

import { IUser } from '@/types/user';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserStore {
  user: IUser | null;
  isLoading: boolean;
  error: string | null;
  fetchUser: () => Promise<IUser | undefined>;
  setUser: (user: IUser) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      error: null,

      // API-запит
      fetchUser: async () => {
        set({ isLoading: true, error: null });

        try {
          const res = await fetch('/api/user', {
            credentials: 'include',
          });

          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }

          const data = (await res.json()) as IUser;
          set({ user: data, isLoading: false });
          return data;
        } catch (error) {
          if (error instanceof Error) {
            set({ error: error.message, isLoading: false });
          } else {
            set({ error: 'Unknown error', isLoading: false });
          }
        }
      },

      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'user-store', // для збереження в localStorage
      partialize: (state) => ({ user: state.user }), // не зберігаємо isLoading/error
    },
  ),
);
