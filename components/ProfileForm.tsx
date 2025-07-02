'use client';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 rounded-[20px] border border-solid border-custom-light-grey bg-white px-20 py-14 shadow-[0px_4px_4px_-1px_rgba(12,_12,_13,_0.05)]"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Основна інформація</FormLabel>
              <FormControl>
                <Input placeholder="Ваше ім'я..." {...field} />
              </FormControl>{' '}
              <FormControl>
                <Input placeholder="Ваш номер телефону..." {...field} />
              </FormControl>{' '}
              <FormControl>
                <Input placeholder="Ваша пошта..." {...field} />
              </FormControl>
              <FormLabel>Додати месенджери</FormLabel>
              <FormControl>
                <Input placeholder="+380661234567" {...field} />
              </FormControl>
              <FormControl>
                <Input placeholder="@telegram" {...field} />
              </FormControl>
              <FormLabel>Фізична адреса</FormLabel>
              <FormDescription>
                Додайте адресу, щоб бачити відстань до продавців і легше обирати
                найзручніший варіант для покупки.
              </FormDescription>{' '}
              <FormControl>
                <Input placeholder="Ваша адреса..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
