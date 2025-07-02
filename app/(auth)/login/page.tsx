'use client';

import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { z } from 'zod';

import { loginSchema } from '@/lib/validateSchema';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IUser } from '@/types/user';

type LoginFormData = z.infer<typeof loginSchema>;

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const accessToken = await loginUser(data);
      const user = await getUserInformation(accessToken);
      // Записуємо у localStorage
      localStorage.setItem('accessToken', accessToken);
      // Зберігаємо user як JSON рядок
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  const loginUser = async (userData: LoginFormData): Promise<string> => {
    console.log('✅ Відправлені дані:', userData);
    try {
      const response = await axios.post<string>(
        'https://bazario-mkur.onrender.com/api/anonymous/login',
        userData,
      );
      console.log('🎉 Успішний вхід:', response.data);
      return response.data;
    } catch {
      console.error('❌ Помилка входу:');
      return '';
    }
  };

  const getUserInformation = async (
    accessToken: string,
  ): Promise<IUser | undefined> => {
    try {
      const response = await axios.get<IUser>(
        'https://bazario-mkur.onrender.com/api/private/user',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error('❌ Помилка отримання інформації про користувача:', error);
      return undefined;
    }
  };

  return (
    <div className="flex w-screen items-center justify-center bg-custom-half-dark-grey sm:h-full sm:py-[56px] md:h-[900px]">
      <div className="flex justify-center rounded-[40px] bg-secondary py-[56px] sm:h-full sm:w-[335px] md:h-[712px] md:w-[727px] lg:h-[735px] lg:w-[906px] xl:h-[745px] xl:w-[906px]">
        <div className="flex flex-col items-center gap-7 xl:h-[449px] xl:w-[794px]">
          <Image src="/BazarioBig.svg" alt="logo" width={106} height={106} />
          <div className="flex sm:flex-col sm:gap-4 md:flex-row lg:gap-14">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-[28px] sm:w-[303px] md:w-[360px] lg:w-[443px]"
            >
              <p className="text-[28px] font-semibold leading-[42px] text-primary">
                Вхід
              </p>
              <div className="flex flex-col gap-[14px]">
                <Input
                  placeholder="Ваш емейл"
                  type="text"
                  {...register('email')}
                  error={errors.email?.message}
                />
                <Input
                  placeholder="Пароль"
                  type="password"
                  {...register('password')}
                  error={errors.password?.message}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Button type="submit">Увійти</Button>
                <p className="text-[14px] font-semibold leading-[21px] text-primary">
                  Забули свій пароль? Перейдіть до{' '}
                  <Link href="/reset-password" className="underline">
                    скидування паролю
                  </Link>
                </p>
                <p className="my-[28px] text-center text-[14px] font-semibold leading-[21px] text-primary">
                  або
                </p>
                <Button variant="ghost">
                  <FcGoogle /> Увійти через Google
                </Button>
              </div>
            </form>
            <div className="flex size-[295px] items-center justify-center rounded-[20px] border-[1px] border-black bg-custom-yellow">
              <div className="flex w-[205px] flex-col gap-[28px]">
                <p className="text-[20px] font-semibold leading-[30px]">
                  Все ще не маєте свого облікового запису?
                </p>
                <Button asChild variant="secondary">
                  <Link href="/register">Зареєструйтесь</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
