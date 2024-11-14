import { ProductStatus } from '@/graphql/generated/graphql'

export type SearchParams = {
  query?: string
  productStatus?: ProductStatus
  categories?: string
  costPrice?: string
  'modal-edit'?: string
  'alert-delete'?: string
  'create-product'?: string
}

export type ProductListPageProps = {
  searchParams: SearchParams
}
