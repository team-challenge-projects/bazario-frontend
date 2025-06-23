import React from 'react';

import { VectorShines } from '@/public/VectorShines';

export const StartProfilePage = () => {
  return (
    <div className="tex flex h-[calc(100vh-314px-86px)] w-full flex-col items-center justify-center gap-4">
      <VectorShines />
      <div className="mt-7 text-lg font-medium text-custom-dark-grey opacity-60">
        Оберіть одну з опцій нижче для редагування профілю
      </div>
    </div>
  );
};
