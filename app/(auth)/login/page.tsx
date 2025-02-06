'use client';

import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Button from '@/app/components/common/Button';
import ButtonLink from '@/app/components/common/ButtonLink';
import Input from '@/app/components/common/Input';

const Login: FC = () => {
  return (
    <div className="flex h-[900px] w-screen items-center justify-center bg-custom-half-dark-grey">
      <div className="flex h-[587px] w-[1064px] items-center justify-center rounded-[40px] bg-secondary">
        <div className="flex h-[449px] w-[794px] flex-col items-center">
          <Image src="@/public/Bazario.svg" alt={'logo'} />
          <div className="flex gap-14">
            <form className="flex w-[443px] flex-col gap-[28px]">
              <p className="text-[28px] font-semibold leading-[42px] text-primary">
                Вxід
              </p>
              <div className="flex flex-col gap-[14px]">
                <Input placeholder={'Ваш логін'} type={'text'} />
                <Input placeholder={'Пароль'} type={'password'} />
              </div>
              <div className="flex flex-col gap-2">
                <Button text={'Увійти'} color={'primary'} />
                <p className="text-[14px] font-semibold leading-[21px] text-primary">
                  Забули свій пароль? Перейдіть до{' '}
                  <Link href={'#'} className="underline">
                    скидування паролю
                  </Link>
                </p>
              </div>
            </form>
            <div className="flex size-[295px] items-center justify-center rounded-[20px] border-[1px] border-black bg-custom-yellow">
              <div className="flex w-[205px] flex-col gap-[28px]">
                <p className="text-[20px] font-semibold leading-[30px]">
                  Все ще не маєте свого облікового запису?
                </p>
                <ButtonLink
                  text={'Зареєструйтесь'}
                  color={'secondary'}
                  url={'/register'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
