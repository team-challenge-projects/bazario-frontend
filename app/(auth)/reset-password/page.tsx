'use client';

import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { ResetPasswordValues, resetPasswordSchema } from '@/lib/validateSchema';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Reset: FC = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<ResetPasswordValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      login: '',
    },
  });

  const onSubmit = async (data: ResetPasswordValues) => {
    console.log('✅ Отправляемые данные:', data);

    try {
      const response = await axios.post(
        'https://bazario-mkur.onrender.com/api/public/resetPassword',
        data,
      );
      console.log('🎉 Успешная отправка на почту:', response.data);
      reset();
    } catch {
      console.error('❌ Ошибка отправки запроса:');
    }
  };

  return (
    <div className="flex h-[900px] w-screen items-center justify-center bg-custom-half-dark-grey">
      <div className="flex xl:h-[541px] xl:w-[906px] lg:w-[906px] lg:h-[735px] md:h-[712px] md:w-[727px] sm:h-full sm:w-[335px] items-center justify-center rounded-[40px] bg-secondary">
        <div className="flex xl:h-[449px] xl:w-[794px] flex-col items-center">
          <Image src="/BazarioBig.svg" alt="logo" width={106} height={106} />
          <div className="flex gap-14">
            <form
              onSubmit={void handleSubmit(onSubmit)}
              className="flex lg:w-[443px] md:w-[360px] flex-col gap-[28px]"
            >
              <p className="text-[28px] font-semibold leading-[42px] text-primary">
                Скидання паролю
              </p>
              <div className="flex flex-col gap-[14px]">
                <Input
                  placeholder="Ваш логін"
                  type="text"
                  {...register('login')}
                  error={errors.login?.message}
                />
              </div>
              <Button type="submit">
                Отримати посилання для відновлення паролю
              </Button>
            </form>
            <div className="flex size-[295px] items-center justify-center rounded-[20px] border-[1px] border-black bg-custom-pink">
              <div className="flex w-[205px] flex-col gap-[28px]">
                <p className="text-[20px] font-semibold leading-[30px]">
                  Згадали пароль?
                </p>
                <Button asChild variant="secondary">
                  <Link href="/login">Увійти</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
