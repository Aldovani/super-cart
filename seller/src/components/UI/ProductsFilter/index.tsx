import { Banknote, BarChart2, Layers3, ShoppingBasket } from 'lucide-react'

import { Input } from '../Input'

export function ProductsFilter() {
  return (
    <header>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <div className="flex gap-2 items-center text-sm text-gray-400 font-medium leading-6 px-6 py-2 border border-gray-200 rounded-lg">
            <ShoppingBasket />
            <span>Todos</span>
          </div>
          <div className="flex gap-2 items-center text-sm text-gray-400 font-medium leading-6 px-6 py-2 border border-gray-200 rounded-lg">
            <Banknote />
            <span>Valor</span>
          </div>
          <div className="flex gap-2 items-center text-sm text-gray-400 font-medium leading-6 px-6 py-2 border border-gray-200 rounded-lg">
            <Layers3 />
            <span>Categorias</span>
          </div>
          <div className="flex gap-2 items-center text-sm text-gray-400 font-medium leading-6 px-6 py-2 border border-gray-200 rounded-lg">
            <BarChart2 />
            <span>Status</span>
          </div>
        </div>
        <div>
          <Input.Field sizes="small" placeholder="Buscar produto" />
        </div>
      </div>
    </header>
  )
}
