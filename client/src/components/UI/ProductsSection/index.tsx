import { ComponentProps } from 'react'
import Link from 'next/link'

import { ProductsList } from '../ProductsList'

type ProductsSectionProp = {
  sectionName: string
  category: string
} & ComponentProps<'section'>

export function ProductsSection({
  sectionName,
  ...props
}: ProductsSectionProp) {
  return (
    <section {...props}>
      <header className="mb-6 flex justify-between items-center">
        <h4 className=" text-2xl text-gray-600 font-medium">{sectionName}</h4>
        <Link href="" className="text-emerald-600 text-sm">
          ver todos
        </Link>
      </header>
      <ProductsList />
    </section>
  )
}
