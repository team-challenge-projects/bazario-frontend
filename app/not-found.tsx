'use client'
import React, {FC} from 'react';
import Link from "next/link";

const NotFound: FC = () => {
    return (
        <div>
            <section className="flex w-full h-full py-[100px] items-center gap-[50px]">
                <div className="size-[400px] bg-error bg-cover bg-no-repeat"></div>
                <div className="w-[44%] flex flex-col items-center text-primary font-semibold font-poppins">
                    <p className="text-center text-[36px] leading-none md:text-[60px] lg:text-[70px]">
                        This page is
                    </p>
                    <p className="text-center text-[40px] leading-none  md:text-[68px] lg:text-[77px]">
                        under construction
                    </p>

                    <p className="mt-5 font-normal w-full md:w-[373px]">
                        Thank you for visiting this page and showing interest in our project.
                        We are thrilled about what&apos;s to come, and we can&apos;t wait to
                        share our progress with you!
                        <br />
                        <Link href={"/"} className="font-normal underline">
                            Please check back soon.
                        </Link>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default NotFound;
