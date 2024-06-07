'use client'

import { useCartProductsStore } from '@/stores/products'

import { Drawer } from '../Drawer'

import { ProgressBar } from './ProgressBar'

type CartProps = {
  children: React.ReactNode
}

export function Cart({ children }: CartProps) {
  const product = useCartProductsStore((state) => state.products)
  const add = useCartProductsStore((state) => state.add)

  return (
    <Drawer>
      <Drawer.Trigger>{children}</Drawer.Trigger>
      <Drawer.Overlay>
        <Drawer.Body>
          <ProgressBar currentValue={125} value={50} />

          <div className="px-8">
            <header className="">
              <div></div>

              <div className="flex justify-between items-center">
                <h2>Mercado Geni</h2>
                <span>ver catalogo</span>
              </div>
            </header>

            <main>
              <ul>
                {product.map((e) => (
                  <li key={e.id} className="flex items-center justify-between">
                    <div className="flex gap-5 ">
                      <div className="size-16 bg-gray-100">
                        <img src={e.image} alt="" className="" />
                      </div>
                      <h4 className="text-gray-400">{e.name}</h4>
                    </div>

                    <div>
                      <span className="text-gray-600 mb-3 font-medium text-end w-full block">
                        {e.price}
                      </span>
                      <div className="flex items-center gap-2 border border-gray-200 rounded-md">
                        <button className="px-2 py-1">-</button>
                        <span>{e.quantity}</span>
                        <button className="px-2 py-1" onClick={() => add(e)}>
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </main>

            <footer></footer>
          </div>
        </Drawer.Body>
      </Drawer.Overlay>
    </Drawer>
  )
}
