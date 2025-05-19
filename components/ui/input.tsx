import * as React from 'react';

import { useEffect, useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & { error?: string }
>(({ type, error, ...props }, ref) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const handleShowPassword = () => setIsPasswordVisible((prev) => !prev);

  const [value, setValue] = useState('');
  const [active, setActive] = useState(false);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    setFilled(!!value);
  }, [value]);

  return (
    <div className="flex flex-col">
      <div
        className={`${type !== 'search' ? 'w-full border-[1px] border-custom-light-grey' : ''} flex items-center justify-between rounded-full px-3 py-[14px] hover:border-[1px] hover:border-custom-light-grey ${
          active ? 'border-[1px] border-custom-light-grey' : 'border-0'
        } ${filled ? 'border-custom-pink' : ''} ${
          error ? 'border-red-500' : ''
        } md:flex`}
      >
        <input
          type={
            type === 'password'
              ? isPasswordVisible
                ? 'text'
                : 'password'
              : type
          }
          className="ml-3.5 bg-transparent font-poppins text-[20px] leading-[30px] outline-none"
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          onChange={(e) => setValue(e.target.value)}
          ref={ref}
          {...props}
        />
        {type === 'password' && (
          <button
            type="button"
            className="lg:flex sm:hidden items-center justify-center text-custom-dark-grey"
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
      {error && (
        <p className="text-[10px] text-red-500 font-semibold">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export { Input };
