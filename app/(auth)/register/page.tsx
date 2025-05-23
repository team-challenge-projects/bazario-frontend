'use client';

import React, { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { z } from 'zod';

import { registerSchema } from '@/lib/validateSchema';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import axios from 'axios';
import { Timer } from '@/components/Timer/timer';

type RegisterFormData = z.infer<typeof registerSchema>;

const Register: FC = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      email: '',
      phoneNumber: '',
      password: '',
      repeatPassword: '',
      accept: false,
    },
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [emailForConfirmation, setEmailForConfirmation] = useState('');

  const now = new Date();
  now.setSeconds(now.getSeconds() + 30);

  const onSubmit = async (data: RegisterFormData) => {
    const { accept, repeatPassword, ...cleanedData } = data;

    try {
      await registerUser(cleanedData);
      await sendVerificationEmail(cleanedData.email);
    } catch (error) {
      console.log(error);
    }
  };

  const registerUser = async (
    userData: Omit<RegisterFormData, 'accept' | 'repeatPassword'>,
  ) => {
    try {
      console.log('✅ Отправляемые данные:', userData);
      const response = await axios.post(
        'https://bazario-mkur.onrender.com/api/anonymous/registration',
        userData,
      );
      console.log(response);
      if (response?.status === 201) {
        reset();
        setEmailForConfirmation(userData.email);
        setIsRegistered(true);
      }
    } catch (error) {
      console.error('❌ Ошибка регистрации:', error);
      throw error;
    }
  };

  const sendVerificationEmail = async (email: string) => {
    try {
      const response = await axios.post(
        'https://bazario-mkur.onrender.com/api/public/send/VERIFY',
        { email: email },
      );
      console.log(response);
    } catch (error) {
      console.error('❌ Ошибка отправки подтверждения:', error);
    }
  };

  return (
    <div className="flex h-full sm:py-[56px] w-screen items-center justify-center bg-custom-half-dark-grey">
      {isRegistered ? (
        <div className="flex flex-col h-[398px] w-[555px] items-center justify-center rounded-[40px] bg-secondary">
          <Image src="/BazarioBig.svg" alt="logo" width={106} height={106} />
          <div className="flex flex-col items-center w-[443px] gap-3.5">
            <p className="text-[28px] font-semibold leading-[42px] text-primary text-center">
              Перевірте вашу пошту
            </p>
            <p>
              Ми відправили лист із посиланням для підтвердження на{' '}
              <span className="text-primary underline font-bold">
                {emailForConfirmation}
              </span>
            </p>
            <span className="font-poppins text-[16px] text-custom-dark-grey">
              Надіслати посилання ще раз через <Timer expiryTimestamp={now} />{' '}
              сек
            </span>
          </div>
        </div>
      ) : (
        <div className="flex xl:w-[906px] lg:w-[906px] lg:h-[900px] md:h-[930px] md:w-[727px] sm:h-full sm:w-[335px] justify-center py-[56px] rounded-[40px] bg-secondary">
          <div className="flex xl:h-[449px] xl:w-[794px] flex-col items-center gap-7">
            <Image src="/BazarioBig.svg" alt="logo" width={106} height={106} />
            <div className="flex lg:gap-14 sm:gap-4 md:flex-row sm:flex-col">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex lg:w-[443px] md:w-[360px] sm:w-[303px] flex-col gap-[28px]"
              >
                <p className="text-[28px] font-semibold leading-[42px] text-primary">
                  Реєстрація
                </p>
                <div className="flex flex-col gap-[14px]">
                  <Input
                    placeholder="Ваше імʼя"
                    type="text"
                    {...register('firstName')}
                    error={errors.firstName?.message}
                  />
                  <Input
                    placeholder="Ваш email"
                    type="text"
                    {...register('email')}
                    error={errors.email?.message}
                  />
                  <Input
                    placeholder="Номер телефону"
                    type="text"
                    {...register('phoneNumber')}
                    error={errors.phoneNumber?.message}
                  />
                  <Input
                    placeholder="Пароль"
                    type="password"
                    {...register('password')}
                    error={errors.password?.message}
                  />
                  <Input
                    placeholder="Повторіть пароль"
                    type="password"
                    {...register('repeatPassword')}
                    error={errors.repeatPassword?.message}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Button type="submit">Зареєструватись</Button>
                  <div className="text-[18px] text-primary flex items-center gap-2">
                    <Controller
                      name="accept"
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          id="terms"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <span>
                      Погоджуюсь з{' '}
                      <Link href="#" className="underline font-bold">
                        політикою конфіденційності
                      </Link>
                    </span>
                  </div>
                  {errors.accept && (
                    <p className="text-[10px] text-red-500 font-semibold">
                      {errors.accept.message}
                    </p>
                  )}
                  <p className="my-[28px] text-center text-[14px] font-semibold leading-[21px] text-primary">
                    або
                  </p>
                  <Button variant="ghost">
                    <FcGoogle /> Увійти через Google
                  </Button>
                </div>
              </form>
              <div className="flex size-[295px] items-center justify-center rounded-[20px] border-[1px] border-black bg-custom-mint">
                <div className="flex w-[205px] flex-col gap-[28px]">
                  <p className="text-[20px] font-semibold leading-[30px]">
                    Уже маєте обліковий запис?
                  </p>
                  <Button asChild variant="secondary">
                    <Link href="/login">Увійти</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
