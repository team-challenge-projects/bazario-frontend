'use client'
import  { FC } from 'react';
import Image from "next/image";
import logoBig from "../../public/BazarioBig.svg"
import Input from "@/app/components/common/Input";
import Button from "@/app/components/common/Button";
import Link from "next/link";
import ButtonLink from "@/app/components/common/ButtonLink";

const Login:FC = () => {
    return (
        <div className="w-screen h-[900px] flex justify-center items-center bg-custom-half-dark-grey">
            <div className="w-[1064px] h-[587px] bg-secondary rounded-[40px] flex justify-center items-center">
                <div className="w-[794px] h-[449px] flex flex-col items-center">
                    <Image src={logoBig} alt={"logo"}/>
                    <div className="flex gap-14">
                        <form className="flex flex-col gap-[28px] w-[443px]">
                            <p className="text-primary font-semibold text-[28px] leading-[42px]">Вxід</p>
                            <div className="flex flex-col gap-[14px]">
                                <Input placeholder={'Ваш логін'} type={'text'}/>
                                <Input placeholder={'Пароль'} type={'password'}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Button text={"Увійти"} color={"primary"}/>
                                <p className="font-semibold text-primary text-[14px] leading-[21px]">Забули свій пароль? Перейдіть до <Link href={"#"} className="underline">скидування паролю</Link></p>
                            </div>
                        </form>
                        <div className="size-[295px] bg-custom-yellow border-black border-[1px] rounded-[20px] flex justify-center items-center">
                            <div className="flex flex-col w-[205px] gap-[28px]">
                                <p className="text-[20px] leading-[30px] font-semibold">Все ще не маєте свого облікового запису?</p>
                                <ButtonLink text={"Зареєструйтесь"} color={"secondary"} url={'/register'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
