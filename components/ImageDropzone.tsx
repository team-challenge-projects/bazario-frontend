'use client';

import { JSX, useCallback, useState } from 'react';
import {
  DropzoneInputProps,
  DropzoneOptions,
  DropzoneRootProps,
  useDropzone,
} from 'react-dropzone';

import { PlusBigCircle } from '@/public/PlusBigCircle';
import { useImageDropzoneStore } from '@/store/useImageDropzoneStore';
import { useUserStore } from '@/store/useUserStore';
import Image from 'next/image';
import { set } from 'zod';

import { Button } from '@/components/ui/button';

export function ImageDropzone({
  id,
  type,
  handleOnClick,
}: {
  id: string;
  type: string;
  handleOnClick: (arg: boolean) => void;
}): JSX.Element {
  const [file, setFile] = useState<File | null>(null);
  const preview = useImageDropzoneStore((state) => state.preview);
  const setPreview = useImageDropzoneStore((state) => state.setPreview);
  const setUploadedUrl = useImageDropzoneStore((state) => state.setUploadedUrl);
  const uploadedUrl = useImageDropzoneStore((state) => state.uploadedUrl);
  const fetchUser = useUserStore((state) => state.fetchUser);
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
    multiple: true,
    maxFiles: 5,
    onDrop,
  });

  const handleUpload = async (): Promise<void> => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('id', id);
    formData.append('type', type);

    const res = await fetch(`/api/upload`, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    });
    if (res.status !== 200) throw new Error('Failed to upload image');
    if (res.ok) {
      const data: string = (await res.json()) as string;
      setUploadedUrl(data);
    }

    await fetchUser();

    setPreview('');
    handleOnClick(false);
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      {' '}
      <div
        {...getRootProps()}
        className={`isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300' } cursor-pointer`}
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
          <div className="flex flex-col items-center justify-center gap-2 p-4 text-center">
            <PlusBigCircle />
            <p className="text-gray-500">
              Перетягни зображення або натисни для вибору
            </p>
          </div>
        )}
      </div>
      <Button onClick={handleUpload} disabled={!file}>
        Завантажити
      </Button>
    </div>
  );
}
