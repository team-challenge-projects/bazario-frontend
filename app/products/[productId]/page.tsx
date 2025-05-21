import React from 'react';

import { SellerSidebar } from '@/components/SellerSidebar';

const ProductCard = ({ params }: { params: { productId: string } }) => {
  return (
    <div className="grid  gap-4">
      <div className="h-20 min-w-52 bg-slate-600"></div>
      <div className="h-20 min-w-52 bg-slate-600"></div>
      <div className="h-20 min-w-52 bg-slate-600"></div>
      <div className="h-20 min-w-52 bg-slate-600"></div>
      <div className="h-20 min-w-52 bg-slate-600"></div>
      <div className="h-20 min-w-52 bg-slate-600"></div>
      <div className="h-20 min-w-52 bg-slate-600"></div>
      <div className="h-20 min-w-52 bg-slate-600"></div>
      <div className="h-20 min-w-52 bg-slate-600"></div>
      <div className="h-20 min-w-52 bg-slate-600"></div>
    </div>
  );
};

export default ProductCard;
