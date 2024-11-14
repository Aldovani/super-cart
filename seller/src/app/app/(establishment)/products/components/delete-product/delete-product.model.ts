import { useMutation } from '@apollo/client'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'sonner'

import {
  DeleteProductMutation,
  DeleteProductMutationVariables,
} from '@/graphql/generated/graphql'
import { DELETE_PRODUCT } from '@/graphql/queries'
import { useModalControl } from '@/hooks/use-modal-control'

export function useDeleteProductModel() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const productId = searchParams.get('productId') || ''

  const { handleCloseOnAnimationEnd, handleToggle, isOpen } = useModalControl({
    searchParamsName: 'alert-delete',
    animationNameOnEnd: 'exit',
    setParams: [['productId', '']],
  })

  const [mutationDeleteProduct] = useMutation<
    DeleteProductMutation,
    DeleteProductMutationVariables
  >(DELETE_PRODUCT, {
    onCompleted: () => {
      handleToggle(false)
      toast.success('Deletado com sucesso')
      router.push('/app/products')
      router.refresh()
    },
    onError: () => {
      toast.error('Erro ao deletar o produto')
    },
  })

  function handleDeleteProduct() {
    mutationDeleteProduct({
      variables: {
        data: {
          productId,
        },
      },
    })
  }

  return {
    handleDeleteProduct,
    handleCloseOnAnimationEnd,
    handleToggle,
    isOpen,
  }
}
