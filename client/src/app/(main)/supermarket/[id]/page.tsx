import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Input } from '@/components/UI/Input'
import { Select } from '@/components/UI/Input/Select'
import { ProductsFilter } from '@/components/UI/ProductsFilter'
import { ProductsSection } from '@/components/UI/ProductsSection'

export default function SupermarketsDetailsPage() {
  return (
    <>
      <div className="relative mt-20 w-full h-60">
        <Image src="/supermarket_banner.png" alt="" objectFit="cover" fill />
      </div>
      <div className="max-w-80% mx-auto pb-10">
        <header className="flex justify-between mt-6 border-b pb-10 border-gray-200">
          <div>
            <nav className="flex items-center gap-2">
              <Link href="/" className="text-gray-400 hover:text-emerald-600">
                Inicio
              </Link>
              <span className="size-[0.375rem] rounded-full bg-gray-200 block"></span>
              <Link
                href="/supermarkets"
                className="text-gray-400 hover:text-emerald-600"
              >
                supermercados
              </Link>
              <span className="size-[0.375rem] rounded-full bg-gray-200 block"></span>
              <Link
                href="/supermarkets/541"
                className="text-gray-500 hover:text-emerald-600"
              >
                Bela vista
              </Link>
            </nav>
            <h1 className="text-[2.5rem] font-semibold text-gray-800 mt-4">
              Supermercado Bela vista
            </h1>

            <Select className="mt-4">
              <option value="">
                Entrega • Sexta - 09:00 - 11:00 • R$ 9,50
              </option>
              <option value="">
                Entrega • Sexta - 09:00 - 11:00 • R$ 9,50
              </option>
              <option value="">
                Entrega • Sexta - 09:00 - 11:00 • R$ 9,50
              </option>
            </Select>
            <span className="mt-4 block text-gray-500">
              Entrega ao mínimo de R$50.00
            </span>
            <span className="mt-3 block text-emerald-600 ">ver mais</span>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex  px-4 py-3 rounded-lg  bg-yellow-100 items-center gap-1">
              <Star className="text-yellow-500 fill-yellow-500" />
              <h3 className="text-2xl font-bold text-yellow-500">4.3</h3>
            </div>
            <strong className="text-xl font-semibold mt-3 text-gray-900">
              Excelente
            </strong>
            <span className="text-gray-400 text-sm mt-1">
              (2000 avaliações)
            </span>
            <Link href="" className="text-emerald-600 mt-2">
              Ver todas avaliações
            </Link>
          </div>
        </header>

        <main className="mt-10 flex gap-20 ">
          <aside>
            <ProductsFilter />
          </aside>
          <div className="w-full px-4  overflow-x-clip">
            <Input.Field placeholder="Busque por item " />

            {/* <ProductDetail /> */}

            <ProductsSection
              className="mt-12"
              sectionName="Em Promoção"
              category="promotion"
            />
            <ProductsSection
              className="mt-12"
              sectionName="Todos os produtos"
              category="all"
            />
            <ProductsSection
              className="mt-12"
              sectionName="Frios"
              category="promotion"
            />
            <ProductsSection
              className="mt-12"
              sectionName="Em Promoção"
              category="promotion"
            />
            <ProductsSection
              className="mt-12"
              sectionName="Em Promoção"
              category="promotion"
            />
          </div>
        </main>
      </div>
    </>
  )
}
