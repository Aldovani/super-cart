import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from '@apollo/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import {
  GetCategoriesQuery,
  ProductStatus,
  ProductUnit,
  UpdateProductMutation,
  UpdateProductMutationVariables,
} from '@/graphql/generated/graphql'
import { EDIT_PRODUCT, GET_CATEGORIES, QUERY_PRODUCTS } from '@/graphql/queries'

import {
  EditProductSchema,
  editProductSchema,
  useEditProductModelProps,
} from './edit-product-form.type'

export function useCreateProductModel({
  onClose,
  initialData,
  productId,
}: useEditProductModelProps) {
  const router = useRouter()
  const form = useForm<EditProductSchema>({
    resolver: zodResolver(editProductSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: initialData,
  })
  const { data, loading, error } = useQuery<GetCategoriesQuery>(GET_CATEGORIES)

  const categories = data?.getCategory.map((category) => ({
    label: category.name,
    value: category.id,
  }))
  const [editProductMutation, { loading: editProductLoading }] = useMutation<
    UpdateProductMutation,
    UpdateProductMutationVariables
  >(EDIT_PRODUCT, {
    refetchQueries: [QUERY_PRODUCTS],
    fetchPolicy: 'no-cache',
    awaitRefetchQueries: true,
    onCompleted: () => {
      onClose(false)
      toast.success('Editado com sucesso')
      router.push('/app/products')
      router.refresh() // Acho q isso é uma péssima ideia: Descobrir uma formar melhor
    },
    onError: () => {
      toast.error('Erro ao editar o produto')
    },
  })

  async function handleEditProduct(data: EditProductSchema) {
    await editProductMutation({
      variables: {
        data: {
          costPrice: data.costPrice,
          description: data.description,
          name: data.name,
          salesPrice: data.salesPrice,
          categories: data.category.map((category) => Number(category.value)),
          unit: data.type as ProductUnit,
          productId,
          status: data.status as ProductStatus,
        },
        image: data.image,
      },
    })
  }

  return {
    form,
    handleEditProduct,
    editProductLoading,
    categories,
    loading,
    error,
  }
}
