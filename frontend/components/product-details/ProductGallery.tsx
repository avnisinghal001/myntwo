import { ImageIcon } from 'lucide-react';

import type { Product } from '@/lib/mock-products';

export function ProductGallery({ product }: { product: Product }) {
  const galleryImages = [product.imageUrl, product.imageUrl, product.imageUrl, product.imageUrl];

  return (
    <section className="rounded-xl border bg-card p-4" aria-label="Product images">
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-lg border bg-muted/30">
        <img src={product.imageUrl} alt={product.productName} className="h-full w-full object-cover" />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {galleryImages.map((image, index) => (
          <button key={`${product.id}-image-${index}`} type="button" className="relative aspect-square overflow-hidden rounded-md border bg-muted/30 ring-offset-background hover:ring-2 hover:ring-ring focus-visible:ring-2 focus-visible:ring-ring" aria-label={`View product image ${index + 1}`}>
            <img src={image} alt="" className="h-full w-full object-cover" />
            {index === 0 && <span className="absolute inset-0 rounded-md ring-2 ring-primary ring-inset" />}
          </button>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground"><ImageIcon className="size-3.5" />4 product images</div>
    </section>
  );
}
