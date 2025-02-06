'use client';

import React, { FC, useEffect, useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

import { InputProps } from '@/app/lib/Input.types';

const Input: FC<InputProps> = ({ placeholder, icon, type }) => {
  const [value, setValue] = useState('');
  const [active, setActive] = useState(false);
  const [filled, setFilled] = useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const handleShowPassword = () =>
    setIsPasswordVisible((prevState) => !prevState);

  useEffect(() => {
    if (value) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }, [value]);

  return (
    <div
      className={`${type !== 'search' ? 'w-[443px] border-[1px] border-custom-light-grey' : ''} flex items-center justify-between rounded-full px-5 py-[14px] hover:border-[1px] hover:border-custom-light-grey ${active ? 'border-[1px] border-custom-light-grey' : 'border-0'} ${filled ? 'border-custom-pink' : ''}`}
    >
      {!active && icon && <span className="mr-2">{icon}</span>}
      <input
        type={
          type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type
        }
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="ml-3.5 bg-transparent font-poppins text-[20px] leading-[30px] outline-none"
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
      {type === 'password' && (
        <button
          type="button"
          className="flex items-center justify-center text-custom-dark-grey"
          onClick={handleShowPassword}
        >
          {!isPasswordVisible ? (
            <IoEyeOutline size={24} />
          ) : (
            <IoEyeOffOutline size={24} />
          )}
        </button>
      )}
    </div>
  );
};

export default Input;
