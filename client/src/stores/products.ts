import { create } from 'zustand'

import { product } from '@/components/UI/ProductsList'

type ProductCart = {
  quantity: number
} & Omit<product, 'description'>

interface CartProductsStore {
  products: ProductCart[]
  add: (product: ProductCart) => void
}

export const useCartProductsStore = create<CartProductsStore>((set) => ({
  products: [],
  add: (product) =>
    set((set) => {
      const productIndex = set.products.findIndex((e) => e.id === product.id)

      if (productIndex === -1) {
        return { products: [...set.products, { ...product, quantity: 1 }] }
      }

      return {
        products: set.products.map((e) =>
          e.id === product.id ? { ...e, quantity: e.quantity + 1 } : e,
        ),
      }
    }),
}))
