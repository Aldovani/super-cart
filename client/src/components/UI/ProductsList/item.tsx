'use client'
import Image from 'next/image'

import { useCartProductsStore } from '@/stores/products'
const product = {
  id: '4',
  image: '/feijão nene.png',
  name: 'feijão',
  price: '15.05',
}

export function ProductsListItem() {
  const add = useCartProductsStore((state) => state.add)
  return (
    <li>
      <article>
        <header className="relative w-36 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
          <Image alt="" src="/feijão nene.png" width={96} height={96} />
          <button
            onClick={() => add(product)}
            className="absolute right-4 bottom-3 shadow-sm text-emerald-600 text-2xl bg-gray-50 size-10 rounded-full hover:text-gray-50 hover:bg-emerald-600"
          >
            +
          </button>
        </header>

        <main className="pt-3">
          <h6 className="text-gray-900 font-medium">R$ 20,00</h6>
          <p className="text-gray-400 text-sm">pacote de feijão mene 2k</p>
        </main>
      </article>
    </li>
  )
}
