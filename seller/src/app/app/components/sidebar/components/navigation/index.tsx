'use client'
import {
  Archive,
  ArrowUpDown,
  BadgePercent,
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

import { LinkItem } from '../../LinkItem'

export function SidebarNavigation() {
  const pathName = usePathname()

  return (
    <>
      <LinkItem
        isActive={pathName === '/app'}
        className="mb-6 ml-6"
        href="/app"
      >
        <LayoutDashboard className="text-gray-400" />
        Dashboard
      </LinkItem>

      <nav className="border-t px-4 py-6 border-gray-200">
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
    </>
  )
}
