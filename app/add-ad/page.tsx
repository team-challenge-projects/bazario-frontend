'use client';

import { useForm } from 'react-hook-form';

import { useImageDropzoneStore } from '@/store/useImageDropzoneStore';
import { useProductStore } from '@/store/useProductStore';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import ProductsCarousel from '@/components/Carousel';
import { ImageDropzone } from '@/components/ImageDropzone';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

// Form schema
const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.string().min(1, 'Price is required'),
  deliveryMethods: z
    .array(z.string())
    .min(1, 'Select at least one delivery method'),
  sellerType: z.enum(['private', 'business']),
  location: z.string().min(1, 'Location is required'),
  condition: z.enum(['new', 'used-good', 'used']),
  category: z.string().min(1, 'Category is required'),
  brand: z.string().optional(),
  ageGroup: z.array(z.string()).optional(),
  photos: z.any().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function AddAdPage() {
  const addProduct = useProductStore((state) => state.addProduct);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      price: '',
      deliveryMethods: [],
      sellerType: 'private',
      location: '',
      condition: 'used-good',
      category: '',
      brand: '',
      ageGroup: [],
    },
  });

  const imageUrls = useImageDropzoneStore((state) => state.imageUrls);
  const onSubmit = (data: FormValues) => {
    addProduct(data);
    // Handle form submission (e.g., redirect or show success message)
    console.log('Form submitted:', data);
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:w-[335px] md:w-[728px] lg:w-[864px] xl:w-[1280px] full:w-[1760px]">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-row gap-5 space-y-6"
      >
        <div className="w-[413px]">
          {/* Product Name */}
          <div>
            <Label htmlFor="title">Назва товару</Label>
            <Input
              id="title"
              placeholder="Введіть назву"
              {...form.register('title')}
            />
            {form.formState.errors.title && (
              <p className="text-sm text-red-500">
                {form.formState.errors.title.message}
              </p>
            )}
          </div>

          {/* Product Description */}
          <div>
            <Label htmlFor="description">Опис товару</Label>
            <Textarea
              id="description"
              placeholder="Додайте опис товару"
              {...form.register('description')}
            />
            {form.formState.errors.description && (
              <p className="text-sm text-red-500">
                {form.formState.errors.description.message}
              </p>
            )}
          </div>

          <div className="border-t pt-6">
            <h2 className="mb-4 text-xl font-semibold">Ціна в гривнях</h2>

            {/* Price */}
            <div className="mb-4">
              <Label htmlFor="price">Ціна</Label>
              <Input
                id="price"
                placeholder="Введіть ціну"
                type="number"
                {...form.register('price')}
              />
              {form.formState.errors.price && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.price.message}
                </p>
              )}
            </div>

            {/* Delivery Methods */}
            <div>
              <Label>Оберіть способи доставки</Label>
              <div className="mt-2 space-y-2">
                {['Самовивіз', 'Нова пошта', 'Укрпошта'].map((method) => (
                  <div key={method} className="flex items-center space-x-2">
                    <Checkbox
                      id={`delivery-${method}`}
                      value={method}
                      checked={form.watch('deliveryMethods')?.includes(method)}
                      onCheckedChange={(checked) => {
                        const current = form.getValues('deliveryMethods') || [];
                        if (checked) {
                          form.setValue('deliveryMethods', [
                            ...current,
                            method,
                          ]);
                        } else {
                          form.setValue(
                            'deliveryMethods',
                            current.filter((m) => m !== method),
                          );
                        }
                      }}
                    />
                    <Label htmlFor={`delivery-${method}`}>{method}</Label>
                  </div>
                ))}
              </div>
              {form.formState.errors.deliveryMethods && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.deliveryMethods.message}
                </p>
              )}
            </div>
          </div>

          {/* Seller Type */}
          <div className="border-t pt-6">
            <h2 className="mb-4 text-xl font-semibold">Продавець</h2>
            <RadioGroup
              defaultValue="private"
              className="flex space-x-4"
              onValueChange={(value) =>
                form.setValue('sellerType', value as 'private' | 'business')
              }
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="private" id="private" />
                <Label htmlFor="private">Приватна особа</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="business" id="business" />
                <Label htmlFor="business">Бізнес</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Location and Condition */}
          <div className="border-t pt-6">
            <h2 className="mb-4 text-xl font-semibold">Місцезнаходження</h2>

            <div className="mb-4">
              <Label htmlFor="location">Місце</Label>
              <Input
                id="location"
                placeholder="Белика Круга, Полтавська обл."
                {...form.register('location')}
              />
              {form.formState.errors.location && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.location.message}
                </p>
              )}
            </div>

            <div>
              <Label>Стан</Label>
              <Select
                onValueChange={(value) => form.setValue('condition', value)}
                defaultValue="used-good"
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Оберіть стан" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">Новий</SelectItem>
                  <SelectItem value="used-good">В гарному стані</SelectItem>
                  <SelectItem value="used">Уживаний</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Category and Additional Info */}
          <div className="border-t pt-6">
            <h2 className="mb-4 text-xl font-semibold">Категорія</h2>

            <div className="mb-4">
              <Label htmlFor="category">Оберіть категорію</Label>
              <Select
                onValueChange={(value) => form.setValue('category', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Оберіть категорію" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="toys">Іграшки</SelectItem>
                  <SelectItem value="clothes">Одяг</SelectItem>
                  <SelectItem value="electronics">Електроніка</SelectItem>
                </SelectContent>
              </Select>
              {form.formState.errors.category && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.category.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <Label htmlFor="brand">Бренд</Label>
              <Input
                id="brand"
                placeholder="LEGO, Хата Київ, etc."
                {...form.register('brand')}
              />
            </div>

            <div>
              <Label>Вікова група</Label>
              <div className="mt-2 flex flex-col gap-2">
                {['0-2 роки', '2 роки', '3-5 років'].map((age) => (
                  <div key={age} className="flex items-center space-x-2">
                    <Checkbox
                      id={`age-${age}`}
                      value={age}
                      checked={form.watch('ageGroup')?.includes(age)}
                      onCheckedChange={(checked) => {
                        const current = form.getValues('ageGroup') || [];
                        if (checked) {
                          form.setValue('ageGroup', [...current, age]);
                        } else {
                          form.setValue(
                            'ageGroup',
                            current.filter((a) => a !== age),
                          );
                        }
                      }}
                    />
                    <Label htmlFor={`age-${age}`}>{age}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Photos */}
        <div>
          <div className="mb-4 flex h-[502px] w-full items-center justify-end gap-x-2">
            <div
              className="h-[502px] w-[739px] rounded-[20px] bg-white bg-cover bg-center bg-no-repeat"
              // style={{ backgroundImage: `url(${product?.image})` }}
            >
              <ImageDropzone id="7" type="AD" handleOnClick={() => {}} />
            </div>

            <div>
              <ProductsCarousel links={imageUrls} />
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="w-full sm:w-auto">
              Опублікувати оголошення
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
