import React, { FC, Suspense } from 'react';

import Image from 'next/image';

import { VerifyContent } from './VerifyContent';

const Verify: FC = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-screen items-center justify-center bg-custom-half-dark-grey sm:py-[56px]">
          <div className="flex h-[470px] w-[555px] flex-col items-center gap-7 rounded-[40px] bg-secondary p-[56px]">
            <Image src="/BazarioBig.svg" alt="logo" width={106} height={106} />
            <div className="flex h-[224px] w-full flex-col items-center justify-center">
              <p className="text-center text-[28px] font-semibold leading-[42px] text-primary">
                Завантаження...
              </p>
            </div>
          </div>
        </div>
      }
    >
      <VerifyContent />
    </Suspense>
  );
};

export default Verify;
