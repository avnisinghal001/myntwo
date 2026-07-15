import { CalendarDays, Layers3, Palette, Tag } from 'lucide-react';

import type { Product } from '@/lib/mock-products';

const Attribute = ({ icon: Icon, label, value }: { icon: typeof Tag; label: string; value: string }) => (
  <div className="flex gap-3 rounded-lg border bg-muted/20 p-3">
    <Icon className="mt-0.5 size-4 text-muted-foreground" />
    <div><p className="text-xs text-muted-foreground">{label}</p><p className="mt-0.5 text-sm font-medium text-foreground">{value}</p></div>
  </div>
);

export function ProductAttributes({ product }: { product: Product }) {
  const createdAt = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(product.createdAt));

  return (
    <section className="rounded-xl border bg-card p-5">
      <h2 className="text-base font-semibold text-foreground">Product attributes</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Attribute icon={Layers3} label="Category" value={product.category} />
        <Attribute icon={Tag} label="Subcategory" value={product.subcategory} />
        <Attribute icon={Palette} label="Colour" value={product.color} />
        <Attribute icon={CalendarDays} label="Created" value={createdAt} />
      </div>
    </section>
  );
}
