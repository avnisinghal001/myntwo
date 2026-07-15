import { Pencil, RefreshCw, Trash2 } from 'lucide-react';

import { RejectionReasonBadge, type RejectionReason } from '@/components/rejected/RejectionReasonBadge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export type RejectedProduct = {
  id: string;
  product: string;
  sku: string;
  brand: string;
  reason: RejectionReason;
  rejectedAt: string;
};

export function RejectedTable({ products }: { products: RejectedProduct[] }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow className="hover:bg-muted/50">
            <TableHead>Product</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Rejection Reason</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="min-w-64 whitespace-normal">
                <p className="font-medium text-foreground">{product.product}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">SKU: {product.sku}</p>
              </TableCell>
              <TableCell className="font-medium">{product.brand}</TableCell>
              <TableCell><RejectionReasonBadge reason={product.reason} /></TableCell>
              <TableCell className="text-muted-foreground">{product.rejectedAt}</TableCell>
              <TableCell>
                <div className="flex justify-end gap-1">
                  <Button variant="ghost" size="sm" aria-label={`Edit ${product.product}`}><Pencil className="size-4" /> <span className="hidden sm:inline">Edit</span></Button>
                  <Button variant="ghost" size="sm" aria-label={`Revalidate ${product.product}`}><RefreshCw className="size-4" /> <span className="hidden sm:inline">Revalidate</span></Button>
                  <Button variant="ghost" size="icon-sm" aria-label={`Delete ${product.product}`} className="text-destructive hover:bg-destructive/10 hover:text-destructive"><Trash2 className="size-4" /></Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="border-t px-4 py-3 text-sm text-muted-foreground">Showing {products.length} rejected products</div>
    </div>
  );
}
