import React from 'react';

import { ImageDropzone } from '@/components/ImageDropzone';

const PopUp = ({
  id,
  type,
  handleOnClick,
}: {
  id: string;
  type: string;
  handleOnClick: (arg: boolean) => void;
}) => {
  return (
    <>
      <div
        className="absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-4 bg-custom-half-dark-grey"
        onClick={() => handleOnClick(false)}
      />
      <div className="absolute left-1/2 top-1/2 z-10 mx-auto flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-4 space-y-4 rounded-[40px] bg-secondary py-[56px] sm:h-full sm:w-[335px] md:h-[712px] md:w-[727px] lg:h-[735px] lg:w-[906px] xl:h-[745px] xl:w-[906px]">
        <ImageDropzone id={id} handleOnClick={handleOnClick} type={type} />
      </div>
    </>
  );
};

export default PopUp;
