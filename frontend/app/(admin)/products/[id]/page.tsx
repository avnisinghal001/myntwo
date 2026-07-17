'use client';

import { Check, Copy, Save, Trash2, X } from 'lucide-react';
import { use, useState } from 'react';

import { EditableProductForm } from '@/components/product-details/EditableProductForm';
import { ProductAttributes } from '@/components/product-details/ProductAttributes';
import { ProductBasicInfo } from '@/components/product-details/ProductBasicInfo';
import { ProductDescription } from '@/components/product-details/ProductDescription';
import { ProductGallery } from '@/components/product-details/ProductGallery';
import { ProductMetadata } from '@/components/product-details/ProductMetadata';
import { ProductQualityCard } from '@/components/product-details/ProductQualityCard';
import { ProductTags } from '@/components/product-details/ProductTags';
import { Button } from '@/components/ui/button';
import { ProductProvider, useProducts } from '@/providers/ProductProvider';

function ProductDetailsContent({ id }: { id: string }) {
  const { products, isLoading } = useProducts();
  const [notice, setNotice] = useState('');
  const product = products.find((item) => item.id === id);

  if (isLoading) {
    return <div className="space-y-6"><div className="h-16 animate-pulse rounded-xl bg-muted" /><div className="grid gap-6 xl:grid-cols-3"><div className="aspect-square animate-pulse rounded-xl bg-muted" /><div className="h-96 animate-pulse rounded-xl bg-muted xl:col-span-2" /></div></div>;
  }

  if (!product) {
    return <section className="flex min-h-80 flex-col items-center justify-center rounded-xl border border-dashed bg-card p-8 text-center"><h1 className="text-xl font-semibold">Product not found</h1><p className="mt-2 text-sm text-muted-foreground">This product is unavailable in the current catalogue data.</p></section>;
  }

  const handleSave = () => setNotice('Changes saved to this local preview.');
  const handleCancel = () => setNotice('Edits discarded.');
  const showActionNotice = (action: string) => setNotice(`${action} is ready to connect to the catalogue workflow.`);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 border-b pb-5 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Products / {product.id}</p>
          <h1 className="mt-1 text-2xl font-semibold text-foreground">Product details</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button type="submit" form="product-edit-form"><Save />Save Changes</Button>
          <Button variant="outline" onClick={() => showActionNotice('Approval')} className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"><Check />Approve</Button>
          <Button variant="outline" onClick={() => showActionNotice('Rejection')} className="border-amber-200 text-amber-700 hover:bg-amber-50"><X />Reject</Button>
          <Button variant="outline" onClick={() => showActionNotice('Duplicate')}><Copy />Duplicate</Button>
          <Button variant="destructive" onClick={() => showActionNotice('Delete')}><Trash2 />Delete</Button>
          <Button variant="ghost" form="product-edit-form" type="reset">Cancel</Button>
        </div>
      </div>

      {notice && <p role="status" className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-foreground">{notice}</p>}

      <div className="grid gap-6 xl:grid-cols-[minmax(240px,0.8fr)_minmax(0,1.2fr)_minmax(260px,0.7fr)]">
        <div className="space-y-6"><ProductGallery product={product} /><ProductTags product={product} /></div>
        <div className="space-y-6"><ProductBasicInfo product={product} /><ProductDescription product={product} /><EditableProductForm product={product} onSave={handleSave} onCancel={handleCancel} /><ProductAttributes product={product} /></div>
        <div className="space-y-6"><ProductQualityCard product={product} /><ProductMetadata product={product} /></div>
      </div>
    </div>
  );
}

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return <ProductProvider><ProductDetailsContent id={id} /></ProductProvider>;
}
