'use client'
import { Banknote, ShoppingBasket } from 'lucide-react'

import { DropDownMenu } from '../DropDownMenu'
import { Input } from '../Input'

export function PromotionsFilter() {
  return (
    <header>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <DropDownMenu.Context>
            <DropDownMenu.Trigger className="flex gap-2 items-center text-sm text-gray-400 font-medium leading-6 px-6 py-2 border border-gray-200 rounded-lg">
              <ShoppingBasket />
              <span>Todos</span>
            </DropDownMenu.Trigger>
            <DropDownMenu.Body>
              <form className="flex flex-col p-2"></form>
            </DropDownMenu.Body>
          </DropDownMenu.Context>

          <DropDownMenu.Context>
            <DropDownMenu.Trigger className="flex gap-2 items-center text-sm text-gray-400 font-medium leading-6 px-6 py-2 border border-gray-200 rounded-lg">
              <Banknote />
              <span>Valor</span>
            </DropDownMenu.Trigger>
            <DropDownMenu.Body>
              <form className="flex flex-col p-2"></form>
            </DropDownMenu.Body>
          </DropDownMenu.Context>

          <DropDownMenu.Context>
            <DropDownMenu.Trigger className="flex gap-2 items-center text-sm text-gray-400 font-medium leading-6 px-6 py-2 border border-gray-200 rounded-lg">
              <Banknote />
              <span>Data</span>
            </DropDownMenu.Trigger>
            <DropDownMenu.Body>
              <form className="flex flex-col p-2"></form>
            </DropDownMenu.Body>
          </DropDownMenu.Context>
        </div>
        <div>
          <Input.Field sizes="small" placeholder="Buscar produto" />
        </div>
      </div>
    </header>
  )
}
