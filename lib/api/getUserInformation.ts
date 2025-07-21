import { IUser } from '@/types/user';

export const getUserInformation = async (): Promise<IUser | undefined> => {
  try {
    const response = await fetch('/api/user');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()) as IUser;
    return data; // Cast the data to IUser
  } catch (error) {
    console.error('❌ Помилка отримання інформації про користувача:', error);
    return undefined;
  }
};
