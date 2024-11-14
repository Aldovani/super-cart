import { Suspense } from 'react'

import { SearchParams } from '../../products.type'

import { ProductFilter } from './components/product-filter'
import { columns } from './components/table/columns'
import { DataTable } from './components/table/data-table'
import { useProductTableModel } from './product-table.model'

type ProductTableProps = {
  searchParams: SearchParams
}

export const revalidate = 0

export async function ProductTable({ searchParams }: ProductTableProps) {
  const { products } = await useProductTableModel({ searchParams })
  return (
    <>
      <ProductFilter />
      <Suspense
        key={` ${searchParams.query}${searchParams.productStatus}${JSON.parse(searchParams.categories || '[]')}${searchParams.costPrice}`}
      >
        <DataTable columns={columns} data={products} />
      </Suspense>
    </>
  )
}
