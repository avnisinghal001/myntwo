import type { Product } from '@/lib/mock-products';

export function ProductTags({ product }: { product: Product }) {
  const tags = [product.category, product.subcategory, product.color, product.brand];

  return (
    <section className="rounded-xl border bg-card p-5">
      <h2 className="text-base font-semibold text-foreground">Tags</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => <span key={tag} className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">{tag}</span>)}
      </div>
    </section>
  );
}
