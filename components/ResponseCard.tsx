import React from 'react';

import { PlusInCircleIcon } from '@/public/PlusInCircleIcon';

import { Avatar, AvatarImage } from './ui/avatar';

const ResponseCard = () => {
  return (
    <div className="flex w-full flex-col items-start gap-2">
      <h3 className="flex flex-row items-center gap-2">
        <Avatar className="h-[60px] w-[60px]">
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <div className="text-lg font-semibold text-custom-black">Імя</div>
        <div className="text-lg font-medium text-custom-dark-grey">⭐ 9/10</div>
      </h3>
      <p className="text-lg font-medium text-custom-black">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est nemo
        dignissimos in sint quas, error ad explicabo, rerum tempora nesciunt
        eaque ullam exercitationem magnam consectetur sequi ipsa ab. Maxime,
        dolorum?
      </p>
      <div className="flex flex-row items-center gap-2 self-center">
        <button>
          <PlusInCircleIcon />
        </button>
        <span className="text-xl font-semibold">Додати відгук</span>
      </div>
    </div>
  );
};

export default ResponseCard;
