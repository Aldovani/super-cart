import { AtSign, Clock4, CreditCard, Home, ShoppingBagIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import ShoppingApp from '@/assets/undraw_shopping_app.svg'

export function MerchantNotVerified() {
  return (
    <main className="py-12 flex flex-col items-center justify-center">
      <section className=" flex flex-col items-center">
        <Image src={ShoppingApp} alt="Shopping app" />
        <h1 className="font-semibold text-2xl text-gray-800 mt-5 max-w-[290px] text-center">
          Antes de começar suas primeiras vendas
        </h1>

        <p className="text-gray-400 max-w-[500px] text-center mt-2">
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </section>
      <section className="w-full max-w-[900px]">
        <ul className="w-full flex flex-col gap-5 mt-16">
          <li className="flex gap-x-4 p-4 border border-gray-200 rounded-md w-full">
            <div>
              <Home />
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-800 text-xl font-medium">Perfil</h3>
                <div className="size-5 border border-gray-200 rounded-full"></div>
              </div>
              <p className="text-gray-400 text-sm">
                Defina algumas informações importante
              </p>
              <Link href="/app/profile" className="text-sm text-emerald-600">
                Configurar perfil
              </Link>
            </div>
          </li>
          <li className="flex gap-x-4 p-4 border border-gray-200 rounded-md w-full">
            <div>
              <CreditCard />
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-800 text-xl font-medium">
                  Forma de pagamento
                </h3>
                <div className="size-5 border border-gray-200 rounded-full"></div>
              </div>
              <p className="text-gray-400 text-sm">
                selecione a forma que os cliente pode realizar pagamentos
              </p>
              <Link
                href="/app/payment-methods"
                className="text-sm text-emerald-600"
              >
                Configurar forma de pagamento
              </Link>
            </div>
          </li>
          <li className="flex gap-x-4 p-4 border border-gray-200 rounded-md w-full">
            <div>
              <ShoppingBagIcon />
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-800 text-xl font-medium">Produtos</h3>
                <div className="size-5 border border-gray-200 rounded-full"></div>
              </div>
              <p className="text-gray-400 text-sm">
                cadastre pelo menos 5 produtos
              </p>
              <Link href="/app/products" className="text-sm text-emerald-600">
                Cadastrar produtos
              </Link>
            </div>
          </li>
          <li className="flex gap-x-4 p-4 border border-gray-200 rounded-md w-full">
            <div>
              <Clock4 />
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-800 text-xl font-medium">Horários</h3>
                <div className="size-5 border border-gray-200 rounded-full"></div>
              </div>
              <p className="text-gray-400 text-sm">
                Defina o horários de funcionamento
              </p>
              <Link href="/app/profile" className="text-sm text-emerald-600">
                Configurar forma de pagamento
              </Link>
            </div>
          </li>
          <li className="flex gap-x-4 p-4 border border-gray-200 rounded-md w-full">
            <div>
              <AtSign />
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-800 text-xl font-medium">
                  Verificar email
                </h3>
                <div className="size-5 border border-gray-200 rounded-full"></div>
              </div>
              <p className="text-gray-400 text-sm">
                Defina algumas informações importante
              </p>
              <Link href="/app/profile" className="text-sm text-emerald-600">
                verificar email
              </Link>
            </div>
          </li>
        </ul>
      </section>
    </main>
  )
}
