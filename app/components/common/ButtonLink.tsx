"use client";
import { FC } from "react";
import { ButtonLinkProps } from "@/app/lib/ButtonLink.types";
import Link from "next/link";
import Button from "@/app/components/common/Button";

const ButtonLink: FC<ButtonLinkProps> = ({ url, ...buttonProps }) => {
  return (
    <Link href={url}>
      <Button {...buttonProps} />
    </Link>
  );
};

export default ButtonLink;
