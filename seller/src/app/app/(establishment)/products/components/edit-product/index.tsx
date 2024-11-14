'use client'

import { useQuery } from '@apollo/client'
import { useSearchParams } from 'next/navigation'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import {
  GetProductQuery,
  GetProductQueryVariables,
} from '@/graphql/generated/graphql'
import { GET_PRODUCT } from '@/graphql/queries'
import { useModalControl } from '@/hooks/use-modal-control'

import { EditProductForm } from './components/edit-product-form'

export default function EditProduct() {
  const searchParams = useSearchParams()
  const productId = searchParams.get('productId') || ''
  const { data } = useQuery<GetProductQuery, GetProductQueryVariables>(
    GET_PRODUCT,
    {
      variables: {
        productId,
      },
      fetchPolicy: 'no-cache',
    },
  )

  const { handleCloseOnAnimationEnd, handleToggle, isOpen } = useModalControl({
    searchParamsName: 'modal-edit',
    animationNameOnEnd: 'exit',
    setParams: [['productId', '']],
  })

  return (
    <Sheet open={isOpen} onOpenChange={handleToggle}>
      <SheetContent
        onAnimationEnd={handleCloseOnAnimationEnd}
        className="!max-w-[580px]  "
      >
        <SheetHeader>
          <SheetTitle>Editar produto</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>

        {data && (
          <EditProductForm product={data.getProduct} onClose={handleToggle} />
        )}
      </SheetContent>
    </Sheet>
  )
}
