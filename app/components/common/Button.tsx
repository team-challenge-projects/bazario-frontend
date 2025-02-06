'use client';

import { FC, useState } from 'react';

import { ButtonProps } from '../../lib/Button.types';

const Button: FC<ButtonProps> = ({ color, text }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={`gap-[10px] px-5 py-[14px] bg-${color} ${
        isHovered ? (color === 'primary' ? '' : '') : ''
      } flex items-center justify-center rounded-2xl`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`${
          color === 'primary' ? 'text-secondary' : 'text-primary'
        } font-poppins text-[20px] font-semibold leading-[30px]`}
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
