'use client';

import React, { FC } from 'react';

import Link from 'next/link';

const NotFound: FC = () => {
  return (
    <div>
      <section className="flex h-full w-full items-center gap-[50px] py-[100px]">
        <div className="size-[400px] bg-error bg-cover bg-no-repeat"></div>
        <div className="flex w-[44%] flex-col items-center font-poppins font-semibold text-primary">
          <p className="text-center text-[36px] leading-none md:text-[60px] lg:text-[70px]">
            This page is
          </p>
          <p className="text-center text-[40px] leading-none md:text-[68px] lg:text-[77px]">
            under construction
          </p>

          <p className="mt-5 w-full font-normal md:w-[373px]">
            Thank you for visiting this page and showing interest in our
            project. We are thrilled about what&apos;s to come, and we
            can&apos;t wait to share our progress with you!
            <br />
            <Link href={'/'} className="font-normal underline">
              Please check back soon.
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
