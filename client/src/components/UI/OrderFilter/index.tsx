import { Banknote } from 'lucide-react'

import { FilterItem } from './FilterItem'

export function OrderFilter() {
  return (
    <form>
      <span className="text-gray-400 ">Ordenar por</span>
      <div className="mt-3 grid grid-cols-3 gap-4 justify-stretch ">
        <FilterItem
          id="price"
          value="Preço"
          icon={<Banknote size={32} className="text-gray-500" />}
        />
        <FilterItem
          id="price"
          value="Avaliação"
          icon={<Banknote size={32} className="text-gray-500" />}
        />
        <FilterItem
          id="price"
          value="Menor distancia"
          icon={<Banknote size={32} className="text-gray-500" />}
        />
        <FilterItem
          id="price"
          value="Tempo de entrega"
          icon={<Banknote size={32} className="text-gray-500" />}
        />
        <FilterItem
          id="price"
          value="Ordenação padrão"
          icon={<Banknote size={32} className="text-gray-500" />}
        />
      </div>
    </form>
  )
}
