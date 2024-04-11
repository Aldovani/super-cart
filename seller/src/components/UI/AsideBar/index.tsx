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

import { LinkItem } from './LinkItem'

export function AsideBar() {
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

          <LinkItem className="mb-6 ml-6" href="/dashboard">
            <LayoutDashboard className="text-gray-400" />
            Dashboard
          </LinkItem>
        </div>

        <nav className="border-y px-4 py-6 border-gray-200">
          <span className="text-sm text-gray-400">Estabelecimento</span>
          <div className="pl-6 flex flex-col gap-4 mt-3">
            <LinkItem href="/products">
              <ShoppingBasket className="text-gray-400" /> Produtos
            </LinkItem>
            <LinkItem href="/products">
              <ArrowUpDown className="text-gray-400" />
              Pedidos
            </LinkItem>
            <LinkItem href="/products">
              <Archive className="text-gray-400" /> Estoque
            </LinkItem>
            <LinkItem href="/products">
              <BadgePercent className="text-gray-400" />
              Promoções
            </LinkItem>
            <LinkItem href="/products">
              <Clock5 className="text-gray-400" />
              Horários
            </LinkItem>
          </div>
        </nav>

        <nav className="border-y px-4 py-6 border-gray-200">
          <span className="text-sm text-gray-400">Finanças</span>
          <div className="pl-6 flex flex-col gap-4 mt-3">
            <LinkItem href="/products">
              <CreditCard className="text-gray-400" /> Forma de pagamento
            </LinkItem>
            <LinkItem href="/products">
              <ScanBarcode className="text-gray-400" />
              Vendas
            </LinkItem>
            <LinkItem href="/products">
              <ReceiptText className="text-gray-400" />
              Financeiro
            </LinkItem>
          </div>
        </nav>

        <nav className=" px-4 py-6">
          <div className="pl-6 flex flex-col gap-4 mt-3">
            <LinkItem href="/products">
              <CircleUserRound className="text-gray-400" /> Perfil
            </LinkItem>
            <LinkItem href="/products">
              <Cog className="text-gray-400" />
              Configuração
            </LinkItem>
          </div>
        </nav>
      </div>
    </aside>
  )
}
