'use client';

import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

const Verify: FC = () => {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        setIsLoading(true);

        const email = searchParams.get('email');
        const token = searchParams.get('token');

        if (!email || !token) {
          setError('Відсутні необхідні параметри у URL');
          setIsLoading(false);
          return;
        }

        const response = await axios.post(
          'https://bazario-mkur.onrender.com/api/public/verify',
          { email, token },
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
      <div className="flex h-full sm:py-[56px] w-screen items-center justify-center bg-custom-half-dark-grey">
        <div className="flex flex-col h-[470px] w-[555px] items-center p-[56px] rounded-[40px] bg-secondary gap-7">
          <Image src="/BazarioBig.svg" alt="logo" width={106} height={106} />
          <div className="w-full h-[224px] flex flex-col items-center justify-center">
            <p className="text-[28px] font-semibold leading-[42px] text-primary text-center">
              Перевірка email...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full sm:py-[56px] w-screen items-center justify-center bg-custom-half-dark-grey">
        <div className="flex flex-col h-[470px] w-[555px] items-center p-[56px] rounded-[40px] bg-secondary gap-7">
          <Image src="/BazarioBig.svg" alt="logo" width={106} height={106} />
          <div className="w-full h-[224px] flex flex-col items-center gap-7">
            <p className="text-[28px] font-semibold leading-[42px] text-primary text-center">
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
    <div className="flex h-full sm:py-[56px] w-screen items-center justify-center bg-custom-half-dark-grey">
      <div className="flex flex-col h-[470px] w-[555px] items-center p-[56px] rounded-[40px] bg-secondary gap-7">
        <Image src="/BazarioBig.svg" alt="logo" width={106} height={106} />
        <div className="w-full h-[224px] flex flex-col items-center gap-7">
          <Image src="/Done.svg" alt="done" width={51} height={51} />
          <p className="text-[28px] font-semibold leading-[42px] text-primary text-center">
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

export default Verify;
