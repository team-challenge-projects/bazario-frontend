'use client';

import React, { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { z } from 'zod';

import { registerSchema } from '@/lib/validateSchema';

import { Timer } from '@/components/Timer/timer';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

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
      console.error('❌ Registration error:', error);
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
      console.error('❌ Verification email error:', error);
    }
  };

  return (
    <div className="flex h-full w-screen items-center justify-center bg-custom-half-dark-grey sm:py-[56px]">
      {isRegistered ? (
        <div className="flex h-[398px] w-[555px] flex-col items-center justify-center rounded-[40px] bg-secondary">
          <Image src="/BazarioBig.svg" alt="logo" width={106} height={106} />
          <div className="flex w-[443px] flex-col items-center gap-3.5">
            <p className="text-center text-[28px] font-semibold leading-[42px] text-primary">
              Перевірте вашу пошту
            </p>
            <p>
              Ми відправили лист із посиланням для підтвердження на{' '}
              <span className="font-bold text-primary underline">
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
        <div className="flex justify-center rounded-[40px] bg-secondary py-[56px] sm:h-full sm:w-[335px] md:h-[930px] md:w-[727px] lg:h-[900px] lg:w-[906px] xl:w-[906px]">
          <div className="flex flex-col items-center gap-7 xl:h-[449px] xl:w-[794px]">
            <Image src="/BazarioBig.svg" alt="logo" width={106} height={106} />
            <div className="flex sm:flex-col sm:gap-4 md:flex-row lg:gap-14">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-[28px] sm:w-[303px] md:w-[360px] lg:w-[443px]"
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
                  <div className="flex items-center gap-2 text-[18px] text-primary">
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
                      <Link href="#" className="font-bold underline">
                        політикою конфіденційності
                      </Link>
                    </span>
                  </div>
                  {errors.accept && (
                    <p className="text-[10px] font-semibold text-red-500">
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
