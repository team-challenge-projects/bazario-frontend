'use client';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { categories, getCategoryLabel } from '@/app/categories/categoriesData';

import { FormSchema } from './schema';

export function CategoriesSidebar() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      minPrice: undefined,
      maxPrice: undefined,
      rating: [],
      condition: [],
      brand: [],
      location: [],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('Submitted data:', data);
  }

  return (
    <aside className="mb-20 mr-8 w-72">
      <h2 className="mb-4 text-xl font-semibold">Дата публікації</h2>
      <time
        className="inset-shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] h-12 rounded-[1.25rem] border border-custom-dark-grey px-5 py-2 text-center text-xl font-normal text-custom-light-grey"
        dateTime="2022-02-22T00:00:00Z"
      >
        22 | 02 | 2022
      </time>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <h2 className="mb-2 mt-4 text-xl font-semibold capitalize">Ціна</h2>
          <div className="flex flex-row space-x-4">
            <FormField
              control={form.control}
              name="minPrice"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Від"
                      className="h-12 w-20 rounded-[1.25rem] border border-custom-dark-grey text-center"
                      onChange={(e) =>
                        field.onChange(
                          e.target.value ? Number(e.target.value) : undefined,
                        )
                      }
                      value={field.value ?? ''}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="maxPrice"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="До"
                      className="h-12 w-20 rounded-[1.25rem] border border-custom-dark-grey text-center"
                      onChange={(e) =>
                        field.onChange(
                          e.target.value ? Number(e.target.value) : undefined,
                        )
                      }
                      value={field.value ?? ''}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {Object.entries(categories).map(([categoryName, items]) => (
            <FormField
              key={categoryName}
              control={form.control}
              name={categoryName as keyof z.infer<typeof FormSchema>}
              render={({ field }) => (
                <FormItem className="mb-2 mt-4">
                  <FormLabel className="text-xl font-semibold capitalize">
                    {getCategoryLabel(categoryName)}
                  </FormLabel>
                  {items.map((item) => (
                    <FormItem key={item.id} className="flex items-center gap-2">
                      <FormControl>
                        <Checkbox
                          className="rounded-1 h-7 w-7 rounded-[0.25rem] border border-custom-dark-grey"
                          checked={
                            Array.isArray(field.value) &&
                            field.value.includes(item.id)
                          }
                          onCheckedChange={(checked) => {
                            const currentValue = Array.isArray(field.value)
                              ? field.value
                              : [];
                            const newValue: string[] = checked
                              ? [...currentValue, item.id]
                              : currentValue.filter(
                                  (v: string) => v !== item.id,
                                );

                            field.onChange(newValue);
                          }}
                        />
                      </FormControl>

                      <FormLabel className="!m-0 align-middle text-[1.125rem] font-medium leading-[1.2]">
                        {item.label}
                      </FormLabel>
                    </FormItem>
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="submit"
            className="shadow-[0px_1px_3px_0px_rgba(0, 0, 0, 0.3),0px_4px_8px_3px_rgba(0, 0, 0, 0.15)] mt-8 flex w-full flex-row justify-center rounded-[1.25rem] bg-[#f1f5f9] px-5 py-4 align-middle text-xl font-semibold text-custom-black hover:bg-custom-light-mint"
          >
            Застосувати фільтри
          </Button>
        </form>
      </Form>
    </aside>
  );
}
