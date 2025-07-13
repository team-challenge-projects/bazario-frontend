'use client';

import { useForm } from 'react-hook-form';

import { IUser } from '@/types/user';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { Switch } from '../ui/switch';

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'Username must be at least 2 characters.' }),
  phone: z.string(),
  email: z.string(),
  messengerPhone: z.string(),
  telegram: z.string(),
  address: z.string(),
});

export function ProfileForm({ user }: { user: IUser }) {
  // Окремі форми для кожного поля
  const usernameForm = useForm<{ username: string }>({
    resolver: zodResolver(formSchema.pick({ username: true })),
    defaultValues: { username: `${user.firstName} ${user.lastName}` || '' },
  });
  const phoneForm = useForm<{ phone: string }>({
    resolver: zodResolver(formSchema.pick({ phone: true })),
    defaultValues: { phone: user.phoneNumber || '' },
  });
  const emailForm = useForm<{ email: string }>({
    resolver: zodResolver(formSchema.pick({ email: true })),
    defaultValues: { email: user.email || '' },
  });
  const messengerPhoneForm = useForm<{ messengerPhone: string }>({
    resolver: zodResolver(formSchema.pick({ messengerPhone: true })),
    defaultValues: { messengerPhone: '' },
  });
  const telegramForm = useForm<{ telegram: string }>({
    resolver: zodResolver(formSchema.pick({ telegram: true })),
    defaultValues: { telegram: '' },
  });
  const addressForm = useForm<{ address: string }>({
    resolver: zodResolver(formSchema.pick({ address: true })),
    defaultValues: { address: '' },
  });
  const handleSubmitForm = (data: {
    username?: string;
    phone?: string;
    email?: string;
    messengerPhone?: string;
    telegram?: string;
    address?: string;
  }) => {
    console.log('Submitted data:', data);
  };
  return (
    <div className="w-[847px] space-y-8 rounded-[20px] border border-solid border-custom-light-grey bg-white px-20 py-14 shadow-[0px_4px_4px_-1px_rgba(12,_12,_13,_0.05)]">
      {/* Username */}
      <Form {...usernameForm}>
        <form
          onSubmit={usernameForm.handleSubmit(handleSubmitForm)}
          className="flex items-end gap-2"
        >
          <FormField
            control={usernameForm.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Основна інформація</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ваше ім'я..."
                    {...field}
                    className="rounded-[40px] border-custom-half-dark-grey px-5 py-4"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
      {/* Phone */}
      <Form {...phoneForm}>
        <form
          onSubmit={phoneForm.handleSubmit(handleSubmitForm)}
          className="flex items-end gap-2"
        >
          <FormField
            control={phoneForm.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Ваш номер телефону..."
                    {...field}
                    className="rounded-[40px] border-custom-half-dark-grey px-5 py-4"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Зберегти</Button>
        </form>
      </Form>
      {/* Email */}
      <Form {...emailForm}>
        <form
          onSubmit={emailForm.handleSubmit(handleSubmitForm)}
          className="flex items-end gap-2"
        >
          <FormField
            control={emailForm.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Ваша пошта..."
                    {...field}
                    className="rounded-[40px] border-custom-half-dark-grey px-5 py-4"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Зберегти</Button>
        </form>
      </Form>
      {/* Messenger Phone */}

      <Form {...messengerPhoneForm}>
        <form
          onSubmit={messengerPhoneForm.handleSubmit(handleSubmitForm)}
          className="flex items-center gap-2"
        >
          {' '}
          <Image src={'/viber_img.svg'} width={58} height={58} alt="Viber" />
          <FormField
            control={messengerPhoneForm.control}
            name="messengerPhone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="+380661234567"
                    {...field}
                    className="rounded-[40px] border-custom-half-dark-grey px-5 py-4"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Switch
            onCheckedChange={(checked) => {
              if (checked) {
                void messengerPhoneForm.handleSubmit(handleSubmitForm)();
              } else {
                messengerPhoneForm.reset({ messengerPhone: '' });
                void messengerPhoneForm.handleSubmit(handleSubmitForm)();
              }
            }}
          />{' '}
        </form>
      </Form>
      {/* Telegram */}
      <Form {...telegramForm}>
        <form
          onSubmit={telegramForm.handleSubmit(handleSubmitForm)}
          className="flex items-center gap-2"
        >
          <Image
            src={'/telegram-logo.svg'}
            width={58}
            height={58}
            alt="telegram logo'"
          />
          <FormField
            control={telegramForm.control}
            name="telegram"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="@telegram"
                    {...field}
                    className="rounded-[40px] border-custom-half-dark-grey px-5 py-4"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Switch
            onCheckedChange={(checked) => {
              if (checked) {
                void telegramForm.handleSubmit(handleSubmitForm)();
              } else {
                telegramForm.reset({ telegram: '' });
                void telegramForm.handleSubmit(handleSubmitForm)();
              }
            }}
          />{' '}
        </form>
      </Form>
      {/* Address */}
      <Form {...addressForm}>
        <form
          onSubmit={addressForm.handleSubmit(handleSubmitForm)}
          className="flex items-end gap-2"
        >
          <FormField
            control={addressForm.control}
            name="address"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Фізична адреса</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ваша адреса..."
                    {...field}
                    className="rounded-[40px] border-custom-half-dark-grey px-5 py-4"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Зберегти</Button>
        </form>
      </Form>
    </div>
  );
}
