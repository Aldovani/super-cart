'use client'
import {
  Archive,
  ArrowUpDown,
  BadgePercent,
  ChevronDown,
  CircleUserRound,
  Clock5,
  Cog,
  CreditCard,
  LayoutDashboard,
  ReceiptText,
  ScanBarcode,
  ShoppingBasket,
} from 'lucide-react'
import { usePathname } from 'next/navigation'

import { LinkItem } from './LinkItem'

export function AsideBar() {
  const pathName = usePathname()

  return (
    <aside className="relative col-start-1 col-end-2 row-start-1 row-end-3 ">
      <div className="fixed  max-w-fit pt-6 border-r border-gray-200 h-full  overflow-y-auto   ">
        <div className="pl-4 pr-5">
          <h2 className="text-emerald-600 font-bold text-xl">Super Cart</h2>

          <div className="mt-6 mb-8  border flex justify-between items-center border-gray-200 px-2 py-2 rounded-lg">
            <div className="size-10 bg-gray-200 rounded-xl "></div>
            <div className="flex flex-col gap-1">
              <h4 className="text-gray-600 text-sm font-medium leading-[100%]">
                Mercado Geni
              </h4>
              <span className="text-xs text-gray-400">Mercado</span>
            </div>
            <ChevronDown className="text-gray-500" />
          </div>

          <LinkItem
            isActive={pathName.includes('/app/dashboard')}
            className="mb-6 ml-6"
            href="/app/dashboard"
          >
            <LayoutDashboard className="text-gray-400" />
            Dashboard
          </LinkItem>
        </div>

        <nav className="border-y px-4 py-6 border-gray-200">
          <span className="text-sm text-gray-400">Estabelecimento</span>
          <div className="pl-6 flex flex-col gap-4 mt-3">
            <LinkItem
              href="/app/products"
              isActive={pathName.includes('/app/products')}
            >
              <ShoppingBasket className="text-gray-400" /> Produtos
            </LinkItem>
            <LinkItem
              href="/app/orders"
              isActive={pathName.includes('/app/orders')}
            >
              <ArrowUpDown className="text-gray-400" />
              Pedidos
            </LinkItem>
            <LinkItem
              href="/app/storage"
              isActive={pathName.includes('/app/storage')}
            >
              <Archive className="text-gray-400" /> Estoque
            </LinkItem>
            <LinkItem
              href="/app/promotions"
              isActive={pathName.includes('/app/promotions')}
            >
              <BadgePercent className="text-gray-400" />
              Promoções
            </LinkItem>
            <LinkItem href="/app/products">
              <Clock5 className="text-gray-400" />
              Horários
            </LinkItem>
          </div>
        </nav>

        <nav className="border-y px-4 py-6 border-gray-200">
          <span className="text-sm text-gray-400">Finanças</span>
          <div className="pl-6 flex flex-col gap-4 mt-3">
            <LinkItem
              href="/app/payment-methods"
              isActive={pathName.includes('/app/payment-methods')}
            >
              <CreditCard className="text-gray-400" /> Forma de pagamento
            </LinkItem>
            <LinkItem href="/app/products">
              <ScanBarcode className="text-gray-400" />
              Vendas
            </LinkItem>
            <LinkItem href="/app/products">
              <ReceiptText className="text-gray-400" />
              Financeiro
            </LinkItem>
          </div>
        </nav>

        <nav className=" px-4 py-6">
          <div className="pl-6 flex flex-col gap-4 mt-3">
            <LinkItem
              href="/app/profile"
              isActive={pathName.includes('/app/profile')}
            >
              <CircleUserRound className="text-gray-400" /> Perfil
            </LinkItem>
            <LinkItem
              href="/app/config"
              isActive={pathName.includes('/app/config')}
            >
              <Cog className="text-gray-400" />
              Configuração
            </LinkItem>
          </div>
        </nav>
      </div>
    </aside>
  )
}
