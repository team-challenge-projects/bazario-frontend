import { Product } from '@/types/product';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const product = (await req.json()) as Product;
  const { title, description, price } = product;
  const { id } = await params;
  const updatedProduct = {
    title,
    description,
    price,
  };
  if (!id) {
    return NextResponse.json(
      { message: 'User ID is missing' },
      { status: 400 },
    );
  }
  try {
    const res = await fetch(
      `https://bazario-mkur.onrender.com/api/private/ad/${id}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
        credentials: 'include',
      },
    );
    if (!res.ok) {
      const errorText = await res.text();
      console.error('Update failed:', res.status, errorText);
      throw new Error('Failed to update product');
    }
    return NextResponse.json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json(
      { message: 'Error updating product' },
      { status: 500 },
    );
  }
}
