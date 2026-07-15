import { Search } from 'lucide-react';

import { ProductFilters } from './ProductFilters';

export function ProductToolbar() {
  return (
    <div className="flex flex-col gap-3 rounded-xl border bg-card p-4 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full md:max-w-sm">
        <label className="sr-only" htmlFor="product-search">Search products</label>
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <input id="product-search" type="search" placeholder="Search products, brands..." className="h-9 w-full rounded-lg border border-input bg-background pl-9 pr-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring" />
      </div>
      <ProductFilters />
    </div>
  );
}
