import React from 'react';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export const SingleInputForm = <T extends FieldValues>({
  formName,
  name,
  placeholder,
  buttonText,
}: {
  formName: UseFormReturn<T>;
  name: keyof T;
  placeholder: string;
  buttonText?: string;
}) => {
  return (
    <Form {...formName}>
      <form
        onSubmit={formName.handleSubmit((data) =>
          console.log('username', data),
        )}
        className="flex items-end gap-2"
      >
        <FormField
          control={formName.control}
          name={name as Path<T>}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Основна інформація</FormLabel>
              <FormControl>
                <Input
                  placeholder={placeholder}
                  {...field}
                  className="w-[300px] rounded-[40px] border-custom-half-dark-grey px-5 py-4 md:w-[400px] lg:w-[680px]"
                />
              </FormControl>
            </FormItem>
          )}
        />
        {buttonText && <Button type="submit">{buttonText}</Button>}
      </form>
    </Form>
  );
};
