import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { Option } from '@/components/ui/multiple-selector'
import {
  QueryProductsQuery,
  QueryProductsQueryVariables,
} from '@/graphql/generated/graphql'
import { QUERY_PRODUCTS } from '@/graphql/queries'
import { getClient } from '@/lib/apollo/client'

import { SearchParams } from '../../products.type'

import { Products } from './components/table/columns'

type useProductModelProps = {
  searchParams: SearchParams
}

export const revalidate = 0

export async function useProductTableModel({
  searchParams,
}: useProductModelProps) {
  const token = cookies().get('super_cart_token')
  const [costPriceGTE, costPriceLTE] = JSON.parse(
    searchParams.costPrice || '[0, 1000]',
  )

  const { data, errors } = await getClient().query<
    QueryProductsQuery,
    QueryProductsQueryVariables
  >({
    query: QUERY_PRODUCTS,
    fetchPolicy: 'network-only',

    context: {
      headers: {
        Cookie: JSON.stringify(['super_cart_token', token?.value]),
      },
    },
    variables: {
      filter: {
        name: {
          contains: searchParams.query || '',
        },
        status: searchParams.productStatus || null,
        categories: {
          id: {
            in: JSON.parse(searchParams.categories || '[]').map(
              (item: Option) => Number(item.value),
            ),
          },
        },
        costPrice: {
          gte: Number(costPriceGTE) || undefined,
          lte: Number(costPriceLTE) || undefined,
        },
      },
    },

    errorPolicy: 'all',
  })

  if (errors && errors[0].extensions.code === 'UNAUTHENTICATED') {
    redirect('/auth/sign-in')
  }

  const products: Products[] =
    data?.queryProducts.map((item) => ({
      ...item,
      categories: item.categories?.map((category) => category.name) || [],
    })) || []

  return { products }
}
