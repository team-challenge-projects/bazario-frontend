'use client'
import React, { FC } from 'react';
import Image from "next/image";
import logo from "../../public/BazarioSmall.svg";
import Button from "@/app/components/common/Button";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

interface FooterCategory {
    text: string;
    link: string;
}

const Footer: FC = () => {
    const footerCategories: FooterCategory[] = [
        { text: 'Діти', link: '#' },
        { text: 'Тварини', link: '#' },
        { text: 'Одяг', link: '#' },
        { text: 'Електроніка', link: '#' },
        { text: 'Дім', link: '#' },
        { text: 'Сад', link: '#' },
    ];

    const footerHelp: FooterCategory[] = [
        { text: 'Служба підтримки', link: '#' },
        { text: 'Політика конфіденційності', link: '#' },
        { text: 'FAQ', link: '#' },
        { text: 'Реклама', link: '#' },
    ];

    return (
        <footer className="w-screen h-[314px] flex bg-primary justify-center items-center">
            <div className="w-[1089px] flex gap-[294px]">
                <div className="flex flex-col gap-[28px] w-[299px]">
                    <Image src={logo} alt={"logo"} />
                    <Button text={'Додати оголошення'} color={'secondary'} />
                    <Button text={'Увійти/Зареєструватись'} color={'primary'} />
                </div>
                <div className="flex gap-[56px]">
                    <div className="flex flex-col gap-2">
                        {footerCategories.map((category, id) => (
                            <Link key={id} href={`#`}>
                                <p className="text-secondary text-[18px] leading-[27px] font-semibold flex items-center gap-3.5">{category.text} <IoIosArrowDown  className="size-[14px] text-secondary"/> </p>
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        {footerHelp.map((category, id) => (
                            <Link key={id} href={`/category/${category.link}`}>
                                <p className="text-secondary text-[18px] leading-[27px] font-semibold">{category.text}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;