'use client';

import { FC } from 'react';

import Link from 'next/link';

import { ButtonLinkProps } from '@/lib/ButtonLink.types';

import Button from '@/components/common/Button';

const ButtonLink: FC<ButtonLinkProps> = ({ url, ...buttonProps }) => {
  return (
    <Link href={url}>
      <Button {...buttonProps} />
    </Link>
  );
};

export default ButtonLink;
