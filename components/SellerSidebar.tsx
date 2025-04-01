'use client';

import { useState } from 'react';

import { PlusInCircleIcon } from '@/public/PlusInCircleIcon';
import { DivideSquareIcon } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';

export const SellerSidebar = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const handleOnReadMore = () => {
    setIsReadMore((prev) => !prev);
  };
  return (
    <div className="w-[413px]">
      <ul className="mb-4 flex flex-col gap-2">
        <li className="flex justify-start gap-4">
          <div className="text-xl font-semibold text-custom-black">
            Рейтинг:
          </div>
          <div className="text-lg font-medium text-custom-dark-grey">
            ⭐ 9/10
          </div>
        </li>
        <li className="flex items-center justify-start gap-4">
          <div className="text-xl font-semibold text-custom-black">
            Відгуки:
          </div>
          <div className="relative mr-4 flex h-[60px] w-full">
            {[...Array(5).keys()].map((item) => (
              <div style={{ left: item * 40, position: 'absolute' }} key={item}>
                <Avatar className="h-[60px] w-[60px]">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </div>
            ))}{' '}
            <div className="absolute right-0 top-[50%] translate-y-[-50%] text-xl font-semibold text-custom-black underline underline-offset-4">
              200 +
            </div>
          </div>
        </li>

        <li className="flex flex-col gap-1">
          <div className="flex items-center justify-start gap-4">
            <Avatar className="h-[60px] w-[60px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="text-lg font-semibold text-custom-black">Ім'я</div>
            <div className="text-lg font-medium text-custom-dark-grey">
              ⭐ 9/10
            </div>
            <div className="flex flex-row items-center gap-2">
              <button>
                <PlusInCircleIcon />
              </button>
              <span className="text-xl font-semibold">Додати відгук</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className={isReadMore ? 'h-fit' : 'h-20 overflow-clip'}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              dolores facilis esse nostrum labore amet nulla ipsam mollitia
              aliquam. Velit laborum at saepe modi quibusdam ipsa tempora
              officia vero dolor.
            </p>
            <button
              type="button"
              onClick={handleOnReadMore}
              className="bg-transparent text-sm font-semibold text-custom-dark-grey"
            >
              {isReadMore ? (
                <div className="flex items-center justify-center gap-2">
                  <div>Читати менше</div>
                  <div className="h-[6px] w-[6px] translate-y-[1px] -rotate-[135deg] border-b-2 border-r-2 border-custom-dark-grey"></div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <div>Читати більше</div>
                  <div className="h-[6px] w-[6px] -translate-y-[2px] rotate-45 border-b-2 border-r-2 border-custom-dark-grey"></div>
                </div>
              )}
            </button>
          </div>
        </li>
        <li className="flex justify-start gap-4">
          <div className="text-xl font-semibold text-custom-black">
            Місцезнаходження:
          </div>
          <div className="text-lg font-medium text-custom-black">
            с.Велика Круча, Полтавська обл.
          </div>
        </li>
        <li className="flex justify-start gap-4">
          <div className="text-xl font-semibold text-custom-black">
            Відстань до Вас:
          </div>
          <div className="text-lg font-medium text-custom-black">200 км</div>
        </li>
      </ul>
      <Button className="rounded-[20px] bg-custom-black px-10 py-[34px] text-xl font-semibold text-custom-mint shadow-[0px_2px_3px_0px_rgba(0,0,0,0.3),0px_6px_10px_4px_rgba(0,0,0,0.15)] before:w-full">
        Переглянути контакти продавця
      </Button>
    </div>
  );
};
