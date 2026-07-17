import { Star } from 'lucide-react';

import { ProductActions } from '@/components/products/ProductActions';
import { ProductStatusBadge } from '@/components/products/ProductStatusBadge';
import { ProductImage } from '@/components/shared/ProductImage';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { Product } from '@/types/product';

interface ProductTableProps {
  products: Product[];
  isLoading?: boolean;
}

const categoryFor = (product: Product) => String(product.attributes['Sub Category'] ?? product.attributes.Category ?? 'Uncategorized');
const formatDate = (date: string) => new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(date));

export function ProductTable({ products, isLoading = false }: ProductTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow className="hover:bg-muted/50">
            <TableHead>Image</TableHead><TableHead>Product name</TableHead><TableHead>Brand</TableHead><TableHead>Category</TableHead><TableHead>Colour</TableHead><TableHead>Price</TableHead><TableHead>Rating</TableHead><TableHead>Quality score</TableHead><TableHead>Status</TableHead><TableHead>Created date</TableHead><TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? Array.from({ length: 10 }, (_, index) => (
            <TableRow key={index} className="hover:bg-transparent">
              {Array.from({ length: 11 }, (_, cell) => <TableCell key={cell}><div className="h-5 min-w-16 animate-pulse rounded bg-muted" /></TableCell>)}
            </TableRow>
          )) : products.map((product) => (
            <TableRow key={product.id}>
              <TableCell><div className="w-12"><ProductImage imageUrl={product.img} productName={product.name} width={48} height={60} /></div></TableCell>
              <TableCell className="min-w-60 whitespace-normal"><p className="font-medium text-foreground">{product.name}</p><p className="mt-0.5 text-xs text-muted-foreground">{product.id}</p></TableCell>
              <TableCell className="font-medium">{product.brand}</TableCell>
              <TableCell>{categoryFor(product)}</TableCell>
              <TableCell>{product.colour}</TableCell>
              <TableCell className="font-medium">₹{product.price.toLocaleString('en-IN')}</TableCell>
              <TableCell><span className="inline-flex items-center gap-1 font-medium"><Star className="size-3.5 fill-amber-400 text-amber-400" />{product.avgRating.toFixed(1)}<span className="font-normal text-muted-foreground">({product.ratingCount.toLocaleString('en-IN')})</span></span></TableCell>
              <TableCell><span className="font-medium">{product.qualityScore}%</span></TableCell>
              <TableCell><ProductStatusBadge status={product.status} /></TableCell>
              <TableCell>{formatDate(product.createdAt)}</TableCell>
              <TableCell className="text-right"><ProductActions product={product} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
