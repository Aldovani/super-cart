import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
import { ChevronDown, UserPlus } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { ButtonSignOut } from './components/button-sign-out'

export async function SidebarHeader() {
  return (
    <div className="pl-4 pr-5">
      <h2 className="text-emerald-600 font-bold text-xl">Super Cart</h2>

      <div className="mt-6 mb-8 w-full">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full q border flex justify-between items-center border-gray-200 px-2 py-2 rounded-lg">
            <div className="size-10 bg-gray-200 rounded-xl "></div>
            <div className="flex flex-col items-start gap-1">
              <h4 className="text-gray-600 text-sm font-medium leading-[100%]">
                Mercado Geni
              </h4>
              <span className="text-xs text-gray-400">Mercado</span>
            </div>
            <ChevronDown className="text-gray-500" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[212px] p-3">
            <div className="w-full">
              <span className="text-gray-400 text-sm">contas</span>
              <div className="flex gap-3 mt-2 cursor-pointer hover:bg-gray-100 rounded-xl bg-white p-2">
                <div className="size-10 bg-gray-200 rounded-xl "></div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-gray-600 text-sm font-medium leading-[100%]">
                    Mercado Geni
                  </h4>
                  <span className="text-xs text-gray-400">Mercado</span>
                </div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-200 my-3"></div>
            <div>
              <Button variant="ghost" className="text-gray-500 w-full">
                <UserPlus size={24} />
                Gerenciar contas
              </Button>
              <ButtonSignOut />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
