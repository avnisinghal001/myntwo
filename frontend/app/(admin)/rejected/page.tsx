import PageHeader from '@/components/layout/PageHeader';
import { RejectedTable, type RejectedProduct } from '@/components/rejected/RejectedTable';

const rejectedProducts: RejectedProduct[] = [
  { id: 'RP-1001', product: 'Floral Print Wrap Midi Dress', sku: 'MNT-DRS-10482', brand: 'Mango', reason: 'Missing image', rejectedAt: '15 Jul 2026, 10:42 AM' },
  { id: 'RP-1002', product: 'Men’s Slim Fit Linen Shirt', sku: 'MNT-SHT-08416', brand: 'Roadster', reason: 'Incomplete attributes', rejectedAt: '15 Jul 2026, 10:31 AM' },
  { id: 'RP-1003', product: 'Women’s Leather Block Heels', sku: 'MNT-FWT-02674', brand: 'DressBerry', reason: 'Invalid category', rejectedAt: '15 Jul 2026, 10:18 AM' },
  { id: 'RP-1004', product: 'Classic Crew Neck T-Shirt', sku: 'MNT-TEE-01529', brand: 'H&M', reason: 'Duplicate product', rejectedAt: '15 Jul 2026, 09:56 AM' },
  { id: 'RP-1005', product: 'Checked Casual Overshirt', sku: 'MNT-SHT-07308', brand: 'WROGN', reason: 'Missing image', rejectedAt: '15 Jul 2026, 09:44 AM' },
];

export default function RejectedPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Rejected Products" subtitle="Review products that need attention before they can be imported." />
      <RejectedTable products={rejectedProducts} />
    </div>
  );
}
