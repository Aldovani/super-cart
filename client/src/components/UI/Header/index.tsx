import { LogIn, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

import { Cart } from '../Cart'
import { Input } from '../Input'
import { Logo } from '../Logo'

import { CurrentPosition } from './CurrentPosition'

export function Header() {
  return (
    <header className="top-0 border-b border-gray-200 py-4 fixed z-10 w-full bg-white shadow-sm">
      <div className="flex justify-center items-stretch px-8 gap-x-16 ">
        <Logo />
        <Input.Field placeholder="Busque por item ou loja" className="w-4/5" />
        <div className="flex items-center justify-center flex-1 gap-6">
          <CurrentPosition />
          <Link
            href="/auth/signin"
            className="flex gap-2 items-center justify-center whitespace-nowrap text-gray-500 hover:text-emerald-600"
          >
            <LogIn size={24} className="text-emerald-600" />
            Entra/Cadastra-se
          </Link>

          <Cart>
            <div className="p-3 hover:bg-gray-100 bg-white rounded-lg ">
              <ShoppingCart size={24} className="text-emerald-600" />
            </div>
          </Cart>
        </div>
      </div>
    </header>
  )
}
