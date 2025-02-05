'use client'
import React, { FC, useState } from 'react';
import Image from "next/image";
import logo from "@/public/BazarioSmall.svg";
import Button from "@/app/components/common/Button";
import Input from "@/app/components/common/Input";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { usePathname, } from "next/navigation";
import ButtonLink from "@/app/components/common/ButtonLink";

const Header: FC = () => {
    const [isSelected, setIsSelected] = useState(false);
    const pathname = usePathname();

    return (
        <header className={`${pathname === '/login' ? 'hidden' : ''} w-[1760px] h-[58px] mt-[28px] flex items-center justify-between gap-[28px]`}>
            <Image src={logo} alt={"logo"} />
            <div className="flex items-center gap-7">
                <Input placeholder={'Search'} type={'search'} icon={<IoSearchOutline className="text-custom-dark-grey w-6 h-6" />} />
                <div className="flex gap-[14px]">
                    {!isSelected ? (
                        <IoMdHeartEmpty className="w-8 h-8 hover:text-red-500 cursor-pointer" onClick={() => setIsSelected(true)} />
                    ) : (
                        <div className="relative w-8 h-8 flex justify-center items-center cursor-pointer" onClick={() => setIsSelected(false)}>
                            <IoMdHeartEmpty className="absolute w-8 h-8" />
                            <IoMdHeart className="w-7 h-7 text-red-500" />
                        </div>
                    )}
                    <HiOutlineUser className="w-8 h-8" />
                </div>
                <div className="flex gap-3.5">
                    <Button text={'Додати оголошення'} color={'primary'} />
                    <ButtonLink text={'Увійти/Зареєструватись'} color={'secondary'} url={'/login'} />
                </div>
            </div>
        </header>
    );
};

export default Header;