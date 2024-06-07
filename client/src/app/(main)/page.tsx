'use client'
import { MoreHorizontal } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/UI/Button'
import { FilterModal } from '@/components/UI/FilterModal'
import { OrderFilter } from '@/components/UI/OrderFilter'
import { SupermarketList } from '@/components/UI/SupermarketList'
import { SupermarketItem } from '@/components/UI/SupermarketList/item'

export default function SupermarketsPage() {
  return (
    <div className="max-w-80% mx-auto pb-10">
      <header className="mt-28 flex items-center gap-4">
        <FilterModal filterName="ordenar" filterElement={<OrderFilter />}>
          <div className="border border-gray-200 px-5 py-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-100">
            <span className="text-gray-400">Ordenar</span>
          </div>
        </FilterModal>
        <div className="border border-gray-200 px-5 py-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-100">
          <span className="text-gray-400">Entrega grátis</span>
        </div>
        <div className="border border-gray-200 px-5 py-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-100">
          <span className="text-gray-400">Distancia</span>
        </div>
        <div className="border border-gray-200 px-5 py-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-100">
          <span className="text-gray-400">Tipo</span>
        </div>
        <div className="border border-gray-200 px-5 py-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-100">
          <span className="text-gray-400">Mais bem avaliado</span>
        </div>
      </header>

      <section className="mt-12">
        <header className="flex justify-between items-center">
          <h3 className="text-2xl text-gray-600 font-medium">
            Estabelecimentos próximo a voce
          </h3>
          <Link href="/supermarkets">
            <MoreHorizontal size={24} className="text-emerald-600" />
          </Link>
        </header>
        <SupermarketList>
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
        </SupermarketList>
        <Button variants="secondary" className="mt-8">
          Ver mais
        </Button>
      </section>

      <section className="mt-12">
        <header className="flex justify-between items-center">
          <h3 className="text-2xl text-gray-600 font-medium">
            Estabelecimentos próximo a voce
          </h3>
          <Link href="/supermarkets">
            <MoreHorizontal size={24} className="text-emerald-600" />
          </Link>
        </header>
        <SupermarketList>
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
        </SupermarketList>
        <Button variants="secondary" className="mt-8">
          Ver mais
        </Button>
      </section>

      <section className="mt-12">
        <header className="flex justify-between items-center">
          <h3 className="text-2xl text-gray-600 font-medium">
            Estabelecimentos próximo a voce
          </h3>
          <Link href="/supermarkets">
            <MoreHorizontal size={24} className="text-emerald-600" />
          </Link>
        </header>
        <SupermarketList>
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
        </SupermarketList>
        <Button variants="secondary" className="mt-8">
          Ver mais
        </Button>
      </section>

      <section className="mt-12">
        <header className="flex justify-between items-center">
          <h3 className="text-2xl text-gray-600 font-medium">
            Estabelecimentos próximo a voce
          </h3>
          <Link href="/supermarkets">
            <MoreHorizontal size={24} className="text-emerald-600" />
          </Link>
        </header>
        <SupermarketList>
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
          <SupermarketItem />
        </SupermarketList>
        <Button variants="secondary" className="mt-8">
          Ver mais
        </Button>
      </section>
    </div>
  )
}
