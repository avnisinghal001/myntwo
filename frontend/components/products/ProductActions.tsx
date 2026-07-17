'use client';

import { Check, Copy, Eye, MoreHorizontal, Pencil, Trash2, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import type { Product } from '@/types/product';

interface ProductActionsProps {
  product: Product;
}

const actions: Array<{ label: string; icon: typeof Eye; className?: string }> = [
  { label: 'View', icon: Eye }, { label: 'Edit', icon: Pencil }, { label: 'Approve', icon: Check, className: 'text-emerald-700' },
  { label: 'Reject', icon: X, className: 'text-amber-700' }, { label: 'Duplicate', icon: Copy }, { label: 'Delete', icon: Trash2, className: 'text-destructive' },
];

export function ProductActions({ product }: ProductActionsProps) {
  return (
    <details className="relative inline-block text-left">
      <summary className="list-none [&::-webkit-details-marker]:hidden">
        <Button variant="ghost" size="icon-sm" aria-label={`Actions for ${product.name}`}><MoreHorizontal className="size-4" /></Button>
      </summary>
      <div className="absolute right-0 z-20 mt-1 w-36 rounded-lg border bg-popover p-1 text-popover-foreground shadow-lg">
        {actions.map(({ label, icon: Icon, className }) => (
          <button key={label} type="button" className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-muted ${className ?? ''}`}>
            <Icon className="size-3.5" />{label}
          </button>
        ))}
      </div>
    </details>
  );
}
