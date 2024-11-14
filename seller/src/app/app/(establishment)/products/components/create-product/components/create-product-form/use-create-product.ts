import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from '@apollo/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import {
  CreateProductMutation,
  CreateProductMutationVariables,
  GetCategoriesQuery,
  ProductUnit,
} from '@/graphql/generated/graphql'
import { CREATE_PRODUCT, GET_CATEGORIES } from '@/graphql/queries'

import {
  CreateProductSchema,
  createProductSchema,
  useCreateProductModelProps,
} from './create-product-form.type'

export function useCreateProductModel({ onClose }: useCreateProductModelProps) {
  const router = useRouter()

  const form = useForm<CreateProductSchema>({
    resolver: zodResolver(createProductSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  })
  const { data, loading } = useQuery<GetCategoriesQuery>(GET_CATEGORIES)

  const categories = data?.getCategory.map((category) => ({
    label: category.name,
    value: category.id,
  }))

  const [mutateFunction, { loading: loadingMutation, error: errorMutation }] =
    useMutation<CreateProductMutation, CreateProductMutationVariables>(
      CREATE_PRODUCT,
      {
        onCompleted: () => {
          onClose(false)
          toast.success('Cadastrado com sucesso')
          router.push('/app/products')
          router.refresh()
        },
        onError: () => {
          toast.error('Erro ao cadastrar o produto')
        },
      },
    )
  async function handleCreateProduct(data: CreateProductSchema) {
    mutateFunction({
      variables: {
        data: {
          categories: data.category,
          costPrice: data.costPrice,
          description: data.description,
          name: data.name,
          salesPrice: data.salesPrice,
          unit: data.type as ProductUnit,
        },
        image: data.image,
      },
      context: {
        headers: {
          'x-apollo-operation-name': 'createProduct',
        },
      },
    })
  }

  return {
    form,
    handleCreateProduct,
    categories,
    loading,
    errorMutation,
    loadingMutation,
  }
}
