import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ProductType } from '../types';

interface ProductState {
  products: ProductType[];
  addProduct: (product: ProductType) => void;
  updateProduct: (product: ProductType) => void;
  removeProduct: (id: number) => void;
  toggleHighlight: (id: number) => void;
}

export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
      products: [],
      
      addProduct: (product) =>
        set((state) => ({
          products: [...state.products, { ...product, id: Date.now() }],
        })),

      updateProduct: (product) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.id === product.id ? product : p
          ),
        })),

      removeProduct: (id) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        })),

      toggleHighlight: (id) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.id === id ? { ...p, highlight: !p.highlight } : p
          ),
        })),
    }),
    {
      name: 'product-storage',
      version: 1,
    }
  )
);