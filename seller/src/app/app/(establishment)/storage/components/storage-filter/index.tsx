'use client'
import { Banknote, ShoppingBasket } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'

export function StorageFilter() {
  return (
    <header>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-2 items-center text-sm text-gray-400 font-medium leading-6 px-6 py-2 border border-gray-200 rounded-lg">
              <ShoppingBasket />
              <span>Todos</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <form className="flex flex-col p-2"></form>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-2 items-center text-sm text-gray-400 font-medium leading-6 px-6 py-2 border border-gray-200 rounded-lg">
              <Banknote />
              <span>Valor</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <form className="flex flex-col p-2"></form>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <Input placeholder="Buscar produto" />
        </div>
      </div>
    </header>
  )
}
