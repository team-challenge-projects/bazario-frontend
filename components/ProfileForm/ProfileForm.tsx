'use client';

import { useForm } from 'react-hook-form';

import { IUser } from '@/types/user';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { Switch } from '../ui/switch';

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'Username must be at least 2 characters.' }),
  phoneNumber: z.string(),
  email: z.string().email(),
  messengerPhone: z.string(),
  telegram: z.string(),
  cityName: z.string(),
});

export function ProfileForm({ user }: { user: IUser }) {
  // Окремі форми для кожного поля
  const usernameForm = useForm<{ username: string }>({
    resolver: zodResolver(formSchema.pick({ username: true })),
    defaultValues: { username: `${user.firstName} ${user.lastName}` || '' },
  });
  const phoneForm = useForm<{ phoneNumber: string }>({
    resolver: zodResolver(formSchema.pick({ phoneNumber: true })),
    defaultValues: { phoneNumber: user.phoneNumber || '' },
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
  const addressForm = useForm<{ cityName: string }>({
    resolver: zodResolver(formSchema.pick({ cityName: true })),
    defaultValues: { cityName: '' },
  });
  const handleSubmitForm = async (data: {
    username?: string;
    phoneNumber?: string;
    email?: string;
    messengerPhone?: string;
    telegram?: string;
    cityName?: string;
  }) => {
    console.log('Submitted data:', data);
    const response = await fetch(
      'https://bazario-mkur.onrender.com/api/private/user',
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(data),
      },
    );
    if (!response.ok) {
      throw new Error('Failed to update profile');
    }
    const updatedUser = (await response.json()) as IUser;
    localStorage.setItem('user', JSON.stringify(updatedUser));
    console.log('Profile updated successfully:', updatedUser);
    // Тут можна додати логіку для оновлення стану або UI після успіш
  };
  return (
    <div className="w-[847px] space-y-8 rounded-[20px] border border-solid border-custom-light-grey bg-white px-20 py-14 shadow-[0px_4px_4px_-1px_rgba(12,_12,_13,_0.05)]">
      {/* Username */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold">Основна інформація</h2>

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
                  <FormControl>
                    <Input
                      error={usernameForm.formState.errors?.username?.message}
                      placeholder="Ваше ім'я..."
                      {...field}
                      className="input-user-contact-data"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
      {/* Phone */}
      <Form {...phoneForm}>
        <form
          onSubmit={phoneForm.handleSubmit(handleSubmitForm)}
          className="flex items-center gap-2"
        >
          <FormField
            control={phoneForm.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    error={phoneForm.formState.errors?.phoneNumber?.message}
                    placeholder="Ваш номер телефону..."
                    {...field}
                    className="input-user-contact-data"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="button-user-contact-data" type="submit">
            Додати
          </Button>
        </form>
      </Form>
      {/* Email */}
      <Form {...emailForm}>
        <form
          onSubmit={emailForm.handleSubmit(handleSubmitForm)}
          className="flex items-center gap-2"
        >
          <FormField
            control={emailForm.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Ваша пошта..."
                    error={emailForm.formState.errors?.email?.message}
                    {...field}
                    className="input-user-contact-data"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="button-user-contact-data" type="submit">
            Змінити
          </Button>
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
                    error={
                      messengerPhoneForm.formState.errors?.messengerPhone
                        ?.message
                    }
                    placeholder="+380661234567"
                    {...field}
                    className="input-user-contact-data"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Switch
            className="switch-style h-[30px] w-14 border border-custom-half-dark-grey data-[state=checked]:bg-white data-[state=unchecked]:bg-white"
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
                    error={telegramForm.formState.errors?.telegram?.message}
                    placeholder="@telegram"
                    {...field}
                    className="input-user-contact-data"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Switch
            className="switch-style h-[30px] w-14 border border-custom-half-dark-grey data-[state=checked]:bg-white data-[state=unchecked]:bg-white"
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
      <div>
        <h2 className="mb-2 text-2xl font-semibold">Фізична адреса</h2>
        <p className="mb-4 text-base font-normal">
          Додайте адресу, щоб бачити відстань до продавців і легше обирати
          найзручніший варіант для покупки
        </p>
        <Form {...addressForm}>
          <form
            onSubmit={addressForm.handleSubmit(handleSubmitForm)}
            className="flex items-center gap-2"
          >
            <FormField
              control={addressForm.control}
              name="cityName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      error={addressForm.formState.errors?.cityName?.message}
                      placeholder="Ваша адреса..."
                      {...field}
                      className="input-user-contact-data"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="button-user-contact-data" type="submit">
              Додати
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
