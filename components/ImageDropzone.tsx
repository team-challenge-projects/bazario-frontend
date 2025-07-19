'use client';

import { JSX, useCallback, useState } from 'react';
import {
  DropzoneInputProps,
  DropzoneOptions,
  DropzoneRootProps,
  useDropzone,
} from 'react-dropzone';

import Image from 'next/image';

import { Button } from '@/components/ui/button';

export function ImageDropzone({
  id,
  handleOnClick,
}: {
  id: string;
  handleOnClick: (arg: boolean) => void;
}): JSX.Element {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const onDrop: DropzoneOptions['onDrop'] = useCallback(
    (acceptedFiles: File[]) => {
      const image = acceptedFiles[0];
      if (image) {
        setFile(image);
        setPreview(URL.createObjectURL(image));
      }
    },
    [],
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  }: {
    getRootProps: () => DropzoneRootProps;
    getInputProps: () => DropzoneInputProps;
    isDragActive: boolean;
  } = useDropzone({
    accept: { 'image/*': [] },
    maxFiles: 1,
    onDrop,
  });

  const handleUpload = async (): Promise<void> => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch(
      `https://bazario-mkur.onrender.com/api/image/AVATAR/${id}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        credentials: 'include',
        body: formData,
      },
    );

    const data: { url: string } = (await res.json()) as { url: string };
    setUploadedUrl(data.url);
    handleOnClick(false);
  };

  return (
    <>
      {' '}
      <div
        className="absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-4 bg-custom-half-dark-grey"
        onClick={() => handleOnClick(false)}
      />
      <div className="absolute left-1/2 top-1/2 z-10 mx-auto flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-4 space-y-4 rounded-[40px] bg-secondary py-[56px] sm:h-full sm:w-[335px] md:h-[712px] md:w-[727px] lg:h-[735px] lg:w-[906px] xl:h-[745px] xl:w-[906px]">
        <div
          {...getRootProps()}
          className={`cursor-pointer rounded-xl border-2 border-dashed p-6 text-center transition ${
            isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
        >
          <input {...getInputProps()} />
          {preview ? (
            <Image
              src={preview}
              alt="Preview"
              width={300}
              height={200}
              className="mx-auto rounded-md object-contain"
            />
          ) : (
            <p className="text-gray-500">
              Перетягни зображення або натисни для вибору
            </p>
          )}
        </div>

        <Button onClick={handleUpload} disabled={!file}>
          Завантажити
        </Button>

        {uploadedUrl && (
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Завантажено:</p>
            <Image
              src={uploadedUrl}
              alt="Uploaded"
              width={300}
              height={200}
              className="mx-auto mt-2 rounded-md"
            />
          </div>
        )}
      </div>
    </>
  );
}
