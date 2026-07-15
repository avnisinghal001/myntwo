import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

import { ProductRowActions } from '@/components/products/ProductRowActions';
import { ProductStatusBadge } from '@/components/products/ProductStatusBadge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { Product } from '@/lib/mock-products';

export function ProductTable({ products, totalProducts }: { products: Product[]; totalProducts: number }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow className="hover:bg-muted/50">
            <TableHead>Image</TableHead><TableHead>Product Name</TableHead><TableHead>Brand</TableHead><TableHead>Category</TableHead><TableHead>Price</TableHead><TableHead>Rating</TableHead><TableHead>Quality Score</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell><img src={product.imageUrl} alt="" className="size-11 rounded-lg border object-cover" /></TableCell>
              <TableCell className="min-w-56 whitespace-normal"><p className="font-medium text-foreground">{product.productName}</p><p className="mt-0.5 text-xs text-muted-foreground">{product.id} · {product.color}</p></TableCell>
              <TableCell className="font-medium">{product.brand}</TableCell>
              <TableCell><p>{product.category}</p><p className="text-xs text-muted-foreground">{product.subcategory}</p></TableCell>
              <TableCell className="font-medium">₹{product.price.toLocaleString('en-IN')}</TableCell>
              <TableCell><span className="inline-flex items-center gap-1 font-medium"><Star className="size-3.5 fill-amber-400 text-amber-400" />{product.rating.toFixed(1)}</span></TableCell>
              <TableCell><span className="font-medium">{product.qualityScore}%</span></TableCell>
              <TableCell><ProductStatusBadge status={product.status} /></TableCell>
              <TableCell className="text-right"><ProductRowActions productName={product.productName} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex flex-col gap-3 border-t px-4 py-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>Showing 1–{products.length} of {totalProducts} products</p>
        <div className="flex items-center gap-1 self-end sm:self-auto">
          <Button variant="outline" size="icon-sm" disabled aria-label="Previous page"><ChevronLeft /></Button>
          <Button variant="outline" size="sm" aria-current="page">1</Button>
          <Button variant="ghost" size="sm">2</Button><Button variant="ghost" size="sm">3</Button><span className="px-1">…</span><Button variant="ghost" size="sm">5</Button>
          <Button variant="outline" size="icon-sm" aria-label="Next page"><ChevronRight /></Button>
        </div>
      </div>
    </div>
  );
}
