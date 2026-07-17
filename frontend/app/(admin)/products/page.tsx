'use client';

import { Download, Plus, Upload } from 'lucide-react';
import { useMemo, useState } from 'react';

import { ProductEmptyState } from '@/components/products/ProductEmptyState';
import { ProductPagination } from '@/components/products/ProductPagination';
import { ProductTable } from '@/components/products/ProductTable';
import { ProductToolbar, type ProductFilterValues } from '@/components/products/ProductToolbar';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { ProductProvider, useProducts } from '@/providers/ProductProvider';
import type { Product } from '@/types/product';

const PAGE_SIZE = 10;

const initialFilters: ProductFilterValues = {
  search: '',
  brand: 'all',
  category: 'all',
  colour: 'all',
  status: 'all',
  sort: 'default',
};

const categoryFor = (product: Product) => String(product.attributes['Sub Category'] ?? product.attributes.Category ?? 'Uncategorized');

function ProductsManagement() {
  const { products, isLoading } = useProducts();
  const [filters, setFilters] = useState<ProductFilterValues>(initialFilters);
  const [page, setPage] = useState(1);

  const options = useMemo(() => ({
    brands: [...new Set(products.map((product) => product.brand))].sort(),
    categories: [...new Set(products.map(categoryFor))].sort(),
    colours: [...new Set(products.map((product) => product.colour))].sort(),
  }), [products]);

  const filteredProducts = useMemo(() => {
    const search = filters.search.trim().toLowerCase();
    const result = products.filter((product) => {
      const matchesSearch = !search || [product.name, product.brand, product.description, product.id]
        .some((value) => value.toLowerCase().includes(search));

      return matchesSearch
        && (filters.brand === 'all' || product.brand === filters.brand)
        && (filters.category === 'all' || categoryFor(product) === filters.category)
        && (filters.colour === 'all' || product.colour === filters.colour)
        && (filters.status === 'all' || product.status === filters.status);
    });

    return result.sort((left, right) => {
      if (filters.sort === 'price-asc') return left.price - right.price;
      if (filters.sort === 'price-desc') return right.price - left.price;
      if (filters.sort === 'rating-desc') return right.avgRating - left.avgRating;
      if (filters.sort === 'rating-asc') return left.avgRating - right.avgRating;
      return 0;
    });
  }, [filters, products]);

  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
  const activePage = Math.min(page, pageCount);
  const paginatedProducts = filteredProducts.slice((activePage - 1) * PAGE_SIZE, activePage * PAGE_SIZE);

  const updateFilters = (nextFilters: ProductFilterValues) => {
    setFilters(nextFilters);
    setPage(1);
  };

  const resetFilters = () => updateFilters(initialFilters);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Products"
        subtitle="Manage, review, and maintain your fashion catalogue."
        actions={
          <div className="flex flex-wrap justify-end gap-2">
            <Button variant="outline"><Upload />Upload Dataset</Button>
            <Button variant="outline"><Download />Export CSV</Button>
            <Button><Plus />Add Product</Button>
          </div>
        }
      />

      <ProductToolbar filters={filters} options={options} onFiltersChange={updateFilters} onReset={resetFilters} />

      {isLoading ? (
        <ProductTable products={[]} isLoading />
      ) : filteredProducts.length === 0 ? (
        <ProductEmptyState onReset={resetFilters} />
      ) : (
        <>
          <ProductTable products={paginatedProducts} />
          <ProductPagination
            currentPage={activePage}
            pageCount={pageCount}
            pageSize={PAGE_SIZE}
            totalItems={filteredProducts.length}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <ProductProvider>
      <ProductsManagement />
    </ProductProvider>
  );
}
