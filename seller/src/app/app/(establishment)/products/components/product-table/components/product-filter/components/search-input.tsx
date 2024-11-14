'use client'

import { useState } from 'react'
import { Input } from '@components/ui/input'
import { useSetSearchParams } from '@hooks/use-set-searchParams'

export function SearchInput() {
  const { handleSetSearchParams, searchParams } = useSetSearchParams()

  const [search, setSearch] = useState(searchParams.get('query') || '')
  return (
    <Input
      value={search}
      placeholder="Buscar produto"
      className="max-w-[320px]"
      onChange={(event) => {
        setSearch(event.target.value)
        handleSetSearchParams(['query', event.target.value])
      }}
    />
  )
}
