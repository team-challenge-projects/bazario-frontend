'use client';

import React, { FC, useEffect, useState } from 'react';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';

export const VerifyContent: FC = () => {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const verifyEmail = async () => {
      try {
        setIsLoading(true);
        const searchParams = new URLSearchParams(window.location.search);
        const fullEncoded = searchParams.toString();

        const emailMatch = fullEncoded.match(/email=([^&]+)/);
        const tokenMatch = fullEncoded.match(/token=([^&]+)/);

        const encodedEmail = emailMatch
          ? emailMatch[1].replace('%40', '@')
          : null;
        const encodedToken = tokenMatch ? tokenMatch[1] : null;

        if (!encodedEmail || !encodedToken) {
          setError('Відсутні необхідні параметри у URL');
          setIsLoading(false);
          return;
        }

        const response = await axios.post(
          'https://bazario-mkur.onrender.com/api/anonymous/email/verify',
          {
            email: encodedEmail,
            hex: encodedToken,
          },
        );
        console.log(response);
      } catch (error) {
        console.error('Помилка при підтвердженні email:', error);
        setError('Не вдалося підтвердити email. Будь ласка, спробуйте ще раз.');
      } finally {
        setIsLoading(false);
      }
    };

    void verifyEmail();
  }, [searchParams]);

  if (isLoading) {
    return (
      <div className="flex h-full w-screen items-center justify-center bg-custom-half-dark-grey sm:py-[56px]">
        <div className="flex h-[470px] w-[555px] flex-col items-center gap-7 rounded-[40px] bg-secondary p-[56px]">
          <Image src="/BazarioBig.svg" alt="logo" width={106} height={106} />
          <div className="flex h-[224px] w-full flex-col items-center justify-center">
            <p className="text-center text-[28px] font-semibold leading-[42px] text-primary">
              Перевірка email...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full w-screen items-center justify-center bg-custom-half-dark-grey sm:py-[56px]">
        <div className="flex h-[470px] w-[555px] flex-col items-center gap-7 rounded-[40px] bg-secondary p-[56px]">
          <Image src="/BazarioBig.svg" alt="logo" width={106} height={106} />
          <div className="flex h-[224px] w-full flex-col items-center gap-7">
            <p className="text-center text-[28px] font-semibold leading-[42px] text-primary">
              {error}
            </p>
            <Button asChild className="w-full">
              <Link href="/login">Повернутись до входу</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-screen items-center justify-center bg-custom-half-dark-grey sm:py-[56px]">
      <div className="flex h-[470px] w-[555px] flex-col items-center gap-7 rounded-[40px] bg-secondary p-[56px]">
        <Image src="/BazarioBig.svg" alt="logo" width={106} height={106} />
        <div className="flex h-[224px] w-full flex-col items-center gap-7">
          <Image src="/Done.svg" alt="done" width={51} height={51} />
          <p className="text-center text-[28px] font-semibold leading-[42px] text-primary">
            Пошту успішно підтверджено
          </p>
          <Button asChild className="w-full">
            <Link href="/">Далі</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
