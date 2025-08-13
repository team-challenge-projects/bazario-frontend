import { z } from 'zod';

export const productFormSchema = z.object({
  productName: z
    .string()
    .min(3, 'Назва товару повинна містити мінімум 3 символи'),
  description: z.string().min(10, 'Опис повинен містити мінімум 10 символів'),
  price: z.string().min(1, 'Вкажіть ціну товару'),
  deliveryMethods: z
    .object({
      selfPickup: z.boolean(),
      newPost: z.boolean(),
      ukrpost: z.boolean(),
    })
    .refine(
      (methods) => methods.selfPickup || methods.newPost || methods.ukrpost,
      { message: 'Оберіть хоча б один спосіб доставки' },
    ),
  seller: z
    .object({
      privateIndividual: z.boolean(),
      business: z.boolean(),
    })
    .refine((seller) => seller.privateIndividual || seller.business, {
      message: 'Оберіть тип продавця',
    }),
  location: z.string().min(1, 'Оберіть місцезнаходження'),
  condition: z
    .object({
      new: z.boolean(),
      excellent: z.boolean(),
      used: z.boolean(),
    })
    .refine(
      (condition) => condition.new || condition.excellent || condition.used,
      { message: 'Оберіть стан товару' },
    ),
  category: z.string().min(1, 'Оберіть категорію'),
});
