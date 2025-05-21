'use client';

import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FcGoogle } from 'react-icons/fc';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { loginSchema } from '@/lib/validateSchema';
import axios from 'axios';

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
      await loginUser(data);
      await getUserInformation(data);
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (userData: LoginFormData) => {
    console.log('✅ Отправляемые данные:', userData);
    try {
      const response = await axios.post(
        'https://bazario-mkur.onrender.com/api/anonymous/login',
        userData,
      );
      console.log('🎉 Успешный вход:', response.data);
      reset();
    } catch {
      console.error('❌ Ошибка входа:');
    }
  };

  const getUserInformation = async (userData: LoginFormData) => {
    try {
      const response = await axios.get(
        'https://bazario-mkur.onrender.com/api/private/user',
        {
          params: userData,
        },
      );
      console.log(response);
    } catch (error) {
      console.error('❌ Ошибка получения информации о пользователе:', error);
    }
  };

  return (
    <div className="flex md:h-[900px] sm:h-full sm:py-[56px] w-screen items-center justify-center bg-custom-half-dark-grey">
      <div className="flex xl:h-[745px] xl:w-[906px] lg:w-[906px] lg:h-[735px] md:h-[712px] md:w-[727px] sm:h-full sm:w-[335px] justify-center py-[56px] rounded-[40px] bg-secondary">
        <div className="flex xl:h-[449px] xl:w-[794px] flex-col items-center gap-7">
          <Image src="/BazarioBig.svg" alt="logo" width={106} height={106} />
          <div className="flex lg:gap-14 sm:gap-4 md:flex-row sm:flex-col">
            <form
              onSubmit={void handleSubmit(onSubmit)}
              className="flex lg:w-[443px] md:w-[360px] sm:w-[303px] flex-col gap-[28px]"
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
