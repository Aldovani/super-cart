'use client'
import { Banknote, BarChart2, UserRound } from 'lucide-react'

import { Checkbox } from '../Checkbox'
import { DropDownMenu } from '../DropDownMenu'
import { Input } from '../Input'

export function OrdersFilter() {
  return (
    <header>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <DropDownMenu>
            <DropDownMenu.Trigger className="flex gap-2 items-center text-sm text-gray-400 font-medium leading-6 px-6 py-2 border border-gray-200 rounded-lg">
              <Banknote />
              <span>Valor</span>
            </DropDownMenu.Trigger>
            <DropDownMenu.Body>
              <form className="flex flex-col p-2"></form>
            </DropDownMenu.Body>
          </DropDownMenu>

          <DropDownMenu>
            <DropDownMenu.Trigger className="flex gap-2 items-center text-sm text-gray-400 font-medium leading-6 px-6 py-2 border border-gray-200 rounded-lg">
              <UserRound />
              <span>Cliente</span>
            </DropDownMenu.Trigger>
            <DropDownMenu.Body>
              <div></div>
            </DropDownMenu.Body>
          </DropDownMenu>

          <DropDownMenu>
            <DropDownMenu.Trigger className="flex gap-2 items-center text-sm text-gray-400 font-medium leading-6 px-6 py-2 border border-gray-200 rounded-lg">
              <BarChart2 />
              <span>Status</span>
            </DropDownMenu.Trigger>
            <DropDownMenu.Body>
              <form className="flex flex-col p-2">
                <Checkbox htmlFor="available" label="Disponivel" />
                <Checkbox htmlFor="preparation" label="Em preparo" />
                <Checkbox htmlFor="unavailable" label="Indisponivel" />
              </form>
            </DropDownMenu.Body>
          </DropDownMenu>
        </div>
        <div>
          <Input.Field sizes="small" placeholder="Buscar por cliente" />
        </div>
      </div>
    </header>
  )
}
