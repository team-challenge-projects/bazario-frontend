import { z } from 'zod';

export const FormSchema = z.object({
  minPrice: z
    .number({ invalid_type_error: 'Мінімальна ціна має бути числом' })
    .optional(),
  maxPrice: z
    .number({ invalid_type_error: 'Максимальна ціна має бути числом' })
    .optional(),
  rating: z.array(z.string()).min(1, 'Оберіть хоча б один рейтинг'),
  condition: z.array(z.string()).min(1, 'Оберіть хоча б один стан'),
  brand: z.array(z.string()).min(1, 'Оберіть хоча б один бренд'),
  location: z.array(z.string()).min(1, 'Оберіть хоча б одну область'),
  deliveryMethod: z
    .array(z.string())
    .min(1, 'Оберіть хоча б один спосіб доставки'),
  color: z.array(z.string()).min(1, 'Оберіть хоча б однин колір'),
  childAge: z.array(z.string()).min(1, 'Оберіть хоча б одну вікову категорію'),
  material: z.array(z.string()).min(1, 'Оберіть хоча б один матеріал'),
  size: z.array(z.string()).min(1, 'Оберіть хоча б однин розмір'),
});
