import { Plus, Upload } from 'lucide-react';

import { ProductTable } from '@/components/products/ProductTable';
import { ProductToolbar } from '@/components/products/ProductToolbar';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { mockProducts } from '@/lib/mock-products';

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Products"
        subtitle="Manage and review your fashion catalogue."
        actions={
          <div className="flex flex-wrap justify-end gap-2">
            <Button variant="outline"><Upload />Upload Dataset</Button>
            <Button><Plus />Add Product</Button>
          </div>
        }
      />
      <ProductToolbar />
      <ProductTable products={mockProducts.slice(0, 10)} totalProducts={mockProducts.length} />
    </div>
  );
}
