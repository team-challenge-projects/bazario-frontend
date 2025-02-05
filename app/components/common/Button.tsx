"use client";
import { FC, useState } from "react";
import { ButtonProps } from "../../lib/Button.types";

const Button: FC<ButtonProps> = ({ color, text }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={` px-5 py-[14px] gap-[10px] bg-${color} ${
        isHovered ? (color === "primary" ? "" : "") : ""
      } rounded-2xl flex justify-center items-center`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <span
        className={`${
          color === "primary" ? "text-secondary" : "text-primary"
        } font-semibold font-poppins text-[20px] leading-[30px]`}>
        {text}
      </span>
    </button>
  );
};

export default Button;
