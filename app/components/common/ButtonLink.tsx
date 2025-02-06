'use client';

import { FC } from 'react';

import Link from 'next/link';

import Button from '@/app/components/common/Button';
import { ButtonLinkProps } from '@/app/lib/ButtonLink.types';

const ButtonLink: FC<ButtonLinkProps> = ({ url, ...buttonProps }) => {
  return (
    <Link href={url}>
      <Button {...buttonProps} />
    </Link>
  );
};

export default ButtonLink;
