import { Suspense } from 'react'

import { GetCategoriesQuery } from '@/graphql/generated/graphql'
import { GET_CATEGORIES } from '@/graphql/queries'
import { getClient } from '@/lib/apollo/client'

import { ResetAllFilter } from './components/reset-all-filter'
import {
  CategoriesFilter,
  CostFilter,
  SearchInput,
  StatusFilter,
} from './components'

export async function ProductFilter() {
  const { data } = await getClient().query<GetCategoriesQuery>({
    query: GET_CATEGORIES,
  })

  const categories = data.getCategory.map((category) => ({
    label: category.name,
    value: category.id,
  }))

  return (
    <header className="flex justify-between items-center">
      <div className="flex gap-2">
        <CostFilter />
        <Suspense>
          <CategoriesFilter categories={categories} />
        </Suspense>
        <StatusFilter />
        <ResetAllFilter />
      </div>

      <SearchInput />
    </header>
  )
}
