import { CheckCircle2, Clock3, XCircle } from 'lucide-react';

import type { ProductStatus } from '@/lib/mock-products';
import { cn } from '@/lib/utils';

const statusStyles: Record<ProductStatus, { label: string; className: string; icon: typeof CheckCircle2 }> = {
  Approved: {
    label: 'Approved',
    className: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    icon: CheckCircle2,
  },
  Pending: {
    label: 'Pending',
    className: 'border-amber-200 bg-amber-50 text-amber-700',
    icon: Clock3,
  },
  Rejected: {
    label: 'Rejected',
    className: 'border-rose-200 bg-rose-50 text-rose-700',
    icon: XCircle,
  },
};

export function ProductStatusBadge({ status }: { status: ProductStatus }) {
  const { label, className, icon: Icon } = statusStyles[status];

  return (
    <span className={cn('inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium', className)}>
      <Icon className="size-3.5" aria-hidden="true" />
      {label}
    </span>
  );
}
