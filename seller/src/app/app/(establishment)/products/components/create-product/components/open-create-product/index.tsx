'use client'
import { Button } from '@/components/ui/button'
import { useSetSearchParams } from '@/hooks/use-set-searchParams'

export function OpenCreateProduct() {
  const { handleSetSearchParams } = useSetSearchParams()

  function openCreateProductSheet() {
    handleSetSearchParams(['create-product', 'true'])
  }

  return (
    <Button onClick={openCreateProductSheet} className="w-fit px-8 ">
      Adicionar produto
    </Button>
  )
}
