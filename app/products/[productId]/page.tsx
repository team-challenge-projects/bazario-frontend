import React from 'react';

import Image from 'next/image';

import ProductsCarousel from '@/components/Carousel';
import ResponseCard from '@/components/ResponseCard';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const imageUrls = [
  'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHwwfDB8fHww',
  'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHwwfDB8fHww',
  'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoaW5nfGVufDB8MHwwfHx8MA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1714226830923-03396831c4f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoaW5nfGVufDB8MHwwfHx8MA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1700056214664-4bd97cec12b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsb3RoaW5nfGVufDB8MHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNsb3RoaW5nfGVufDB8MHwwfHx8MA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1725914369270-f20d449ecf66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNsb3RoaW5nfGVufDB8MHwwfHx8MA%3D%3D',
];
const ProductCard = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  return (
    <>
      <div className="grid w-full grid-cols-[1fr_2fr] gap-4">
        <div>
          <ul className="flex flex-col gap-2">
            <li>
              <div className="mb-4 text-2xl font-semibold text-custom-black">
                Назва товару: {productId}
              </div>
              <div className="first-letter: text-lg font-medium text-custom-black">
                Опис товару: Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </div>
            </li>
            <li>
              {' '}
              <div className="text-lg font-semibold text-custom-black">
                Рейтинг продавця:
              </div>
              <div className="text-lg font-medium text-custom-dark-grey">
                ⭐ 9/10
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
              <div className="text-lg font-medium text-custom-black">
                200 км
              </div>
            </li>
            <li className="flex justify-start gap-4">
              <div className="text-xl font-semibold text-custom-black">
                Спосіб доставки:
              </div>
              <div className="text-lg font-medium text-custom-black">
                Накладений платіж. Самовивіз.
              </div>
            </li>
            <li className="flex justify-start gap-4">
              <div className="text-xl font-semibold text-custom-black">
                Дата публікації:
              </div>
              <div className="text-lg font-medium text-custom-black">
                30.09.2023
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex h-[502px] w-full items-center justify-start gap-x-2">
            <div className='h-[502px] w-[739px] rounded-[20px] bg-[url("https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoaW5nfGVufDB8MHwwfHx8MA%3D%3D")] bg-cover bg-center bg-no-repeat' />

            <div>
              <ProductsCarousel links={imageUrls} />
            </div>
          </div>
        </div>
        <div className="col-span-2 w-full">
          <div>
            <div className="flex items-center">
              <div className="row-span-2 text-xl font-semibold text-custom-black">
                Відгуки:
              </div>
              <div className="relative mx-4 flex h-[60px] w-[300px] items-start">
                {[...Array(5).keys()].map((item) => (
                  <div
                    style={{ left: item * 40, position: 'absolute' }}
                    key={item}
                  >
                    <Avatar className="h-[60px] w-[60px]">
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                  </div>
                ))}{' '}
                <div className="absolute right-0 top-[50%] translate-y-[-50%] text-xl font-semibold text-custom-black underline underline-offset-4">
                  200 +
                </div>
              </div>
            </div>
            <div className="mt-4 px-28">
              <ResponseCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
