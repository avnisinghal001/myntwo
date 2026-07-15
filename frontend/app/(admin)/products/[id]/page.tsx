import { Check, Save, Trash2, X } from 'lucide-react';
import { notFound } from 'next/navigation';

import { ProductAttributes } from '@/components/product-details/ProductAttributes';
import { ProductGallery } from '@/components/product-details/ProductGallery';
import { ProductInfo } from '@/components/product-details/ProductInfo';
import { ProductQualityCard } from '@/components/product-details/ProductQualityCard';
import { ProductTags } from '@/components/product-details/ProductTags';
import { Button } from '@/components/ui/button';
import { mockProducts } from '@/lib/mock-products';

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = mockProducts.find((item) => item.id === id);

  if (!product) notFound();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 border-b pb-5 lg:flex-row lg:items-center lg:justify-between">
        <div><p className="text-sm text-muted-foreground">Products / {product.id}</p><h2 className="mt-1 text-2xl font-semibold text-foreground">Product details</h2></div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline"><Save />Save</Button>
          <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"><Check />Approve</Button>
          <Button variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-50"><X />Reject</Button>
          <Button variant="destructive"><Trash2 />Delete</Button>
        </div>
      </div>
      <div className="grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)_minmax(280px,0.65fr)]">
        <ProductGallery product={product} />
        <div className="space-y-6"><ProductInfo product={product} /><ProductAttributes product={product} /></div>
        <div className="space-y-6"><ProductQualityCard product={product} /><ProductTags product={product} /></div>
      </div>
    </div>
  );
}
