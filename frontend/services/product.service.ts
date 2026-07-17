import { mockProducts } from '@/lib/mock-data/products';
import type { Product } from '@/types/product';

export interface ProductSearchParams {
  query?: string;
  brand?: string;
  colour?: string;
  status?: Product['status'];
}

export const getProducts = (): Promise<Product[]> => Promise.resolve(mockProducts);

export const getProduct = (id: string): Promise<Product | undefined> =>
  Promise.resolve(mockProducts.find((product) => product.id === id));

export const searchProducts = (params: ProductSearchParams = {}): Promise<Product[]> => {
  const query = params.query?.trim().toLowerCase();

  return Promise.resolve(mockProducts.filter((product) => {
    const matchesQuery = !query || [product.name, product.brand, product.description]
      .some((value) => value.toLowerCase().includes(query));
    const matchesBrand = !params.brand || product.brand === params.brand;
    const matchesColour = !params.colour || product.colour === params.colour;
    const matchesStatus = !params.status || product.status === params.status;

    return matchesQuery && matchesBrand && matchesColour && matchesStatus;
  }));
};

export const productService = { getProducts, getProduct, searchProducts };
