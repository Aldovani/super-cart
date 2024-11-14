'use client'

import { useSetSearchParams } from '@/hooks/use-set-searchParams'

export function ResetAllFilter() {
  const { handleSetSearchParams, searchParams } = useSetSearchParams()

  const filters = {
    costPrice: searchParams.has('costPrice'),
    categories: searchParams.has('categories'),
    query: searchParams.has('query'),
    productStatus: searchParams.has('productStatus'),
  }

  function resetAllFilter() {
    handleSetSearchParams(
      ['costPrice', ''],
      ['categories', ''],
      ['query', ''],
      ['productStatus', ''],
    )
  }

  if (!Object.values(filters).includes(true)) return

  return (
    <button
      onClick={resetAllFilter}
      className="flex gap-2 items-center text-sm text-gray-400 font-medium leading-6 px-4 py-2 border border-gray-200 rounded-lg"
    >
      Resetar
    </button>
  )
}
