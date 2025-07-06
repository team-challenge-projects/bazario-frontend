'use client';

import { useForm } from 'react-hook-form';

import { IUser } from '@/types/user';
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
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  phone: z.string(),
  email: z.string(),
  messengerPhone: z.string(),
  telegram: z.string(),
  address: z.string(),
});

export function ProfileForm({ user }: { user: IUser }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: `${user.firstName} ${user.lastName}` || '',
      phone: user.phoneNumber || '',
      email: user.email || '',
      messengerPhone: '',
      telegram: '',
      address: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
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
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Ваш номер телефону..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Ваша пошта..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormLabel>Додати месенджери</FormLabel>
        <FormField
          control={form.control}
          name="messengerPhone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="+380661234567" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telegram"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="@telegram" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormLabel>Фізична адреса</FormLabel>
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormDescription>
                Додайте адресу, щоб бачити відстань до продавців і легше обирати
                найзручніший варіант для покупки.
              </FormDescription>
              <FormControl>
                <Input placeholder="Ваша адреса..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
