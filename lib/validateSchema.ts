import { z } from 'zod';

const accept = z.boolean().refine((data) => data, {
  message:
    'Зверніть увагу, що для продовження роботи неоюхідно погодитися з політикою конфіденційності',
});

const email = z
  .string({ required_error: 'Це поле є обов`язковим.' })
  .min(1, 'Це поле є обов`язковим.')
  .max(70, 'максимальна кількість символів 70')
  .email('Неправильний формат електронної пошти');

const password = z
  .string()
  .min(8, 'мінімальна кількість символів 8')
  .max(12, 'максимальна кількість символів 12')
  .regex(/^(?=.*[a-z])/, 'мінімум одна мала літера')
  .regex(/^(?=.*[A-Z])/, 'мінімум одна велика літера')
  .regex(/^(?=.*\d)/, 'мінімум одна цифра')
  .regex(/^[A-Za-z\d]/, 'дозволені тільки латинські літери і цифри ');

const firstName = z
  .string()
  .min(1, 'Це поле є обов`язковим.')
  .regex(/^[A-ZА-ЯІЇЄ]/, 'Ім`я має починатись з великої літери')
  .min(4, 'мінімум 4 символи')
  .max(20, 'максимум 20 символів');

const lastName = z
  .string()
  .min(1, 'Це поле є обов`язковим.')
  .regex(/^[A-ZА-ЯІЇЄ]/, 'Прізвище має починатись з великої літери')
  .min(4, 'мінімум 4 символи')
  .max(20, 'максимум 20 символів');

const fullName = z
  .string()
  .min(1, 'Це поле є обов`язковим.')
  .min(4, 'мінімум 8 символи')
  .max(20, 'максимум 30 символів');

const phone = z
  .string()
  .regex(/^\+380\d{9}$/, 'Введіть дійсний номер телефону');
const cardsNumber = z
  .string()
  .regex(/^\d{4} \d{4} \d{4} \d{4}$/, 'Введіть дійсний номер картки');

export const loginSchema = z.object({
  email: email,
  password: password,
});
export type LoginValues = z.infer<typeof loginSchema>;

export const resetPasswordSchema = z.object({
  email: email,
});
export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;

export const subscribeSchema = z.object({
  email: email,
});
export type SubscribeValues = z.infer<typeof resetPasswordSchema>;

export const registerSchema = z
  .object({
    firstName: firstName,
    email: email,
    phoneNumber: phone,
    password: password,
    repeatPassword: z
      .string()
      .min(1, 'Це поле є обов`язковим.')
      .max(12, 'максимальна кількість символів 12'),
    accept: accept,
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Паролі не співпадають',
    path: ['repeatPassword'],
  });

export type RegisterValues = z.infer<typeof registerSchema>;

export const newAddressSchema = z.object({
  firstName: firstName,
  lastName: lastName,
  region: firstName,
  address: firstName,
  phone: phone,
});

export type NewAddressValues = z.infer<typeof newAddressSchema>;

export const newPurchasesSchema = z.object({
  firstName: firstName,
  lastName: lastName,
  fullName: fullName,
  cards: cardsNumber,
});

export type NewPurchasesValues = z.infer<typeof newPurchasesSchema>;

export const getChangeEmailSchema = (currentPassword?: string) => {
  return currentPassword
    ? z
        .object({
          currentPassword: password,
          email: email,
        })
        .refine((data) => currentPassword === data.currentPassword, {
          path: ['currentPassword'],
          message: 'Error current password',
        })
    : z.object({
        currentPassword: password,
        email: email,
      });
};

export type EditEmailValues = z.infer<ReturnType<typeof getChangeEmailSchema>>;

export const getChangePasswordSchema = (currentPassword?: string) => {
  return currentPassword
    ? z
        .object({
          currentPassword: password,
          password: password,
        })
        .refine((data) => currentPassword === data.currentPassword, {
          path: ['currentPassword'],
          message: 'Error current password',
        })
    : z.object({
        currentPassword: password,
        password: password,
      });
};

export type EditPasswordValues = z.infer<
  ReturnType<typeof getChangePasswordSchema>
>;
