import { gql } from '@apollo/client'

export const SIGN_IN_MERCHANT = gql`
  mutation Auth($data: SignInput!) {
    Auth(data: $data) {
      token
      merchant {
        email
        id
      }
    }
  }
`

export const SIGN_OUT_MERCHANT = gql`
  mutation SignOut {
    SignOut
  }
`
export const REGISTER_MERCHANT = gql`
  mutation RegisterMerchant($data: CreateMerchantInput!) {
    createMerchant(data: $data) {
      email
      id
    }
  }
`
export const DISABLE_MERCHANT = gql`
  mutation DisableMerchant($data: UpdateMerchantInput!) {
    updateMerchant(data: $data) {
      isActive
    }
  }
`
export const DELETE_MERCHANT = gql`
  mutation DeleteMerchant {
    deleteMerchant
  }
`
export const GET_MERCHANT = gql`
  query GetMerchant {
    me {
      id
      corporateName
      tradeName
      logoUrl
      bannerUrl
      cnpj
      isActive
      isValidated
      email
      minDeliveryValue
      type
    }
  }
`

export const QUERY_PRODUCTS = gql`
  query QueryProducts($filter: FilterProductInput!) {
    queryProducts(filter: $filter) {
      name
      id
      status
      costPrice
      salesPrice
      imgUrl
      unit
      categories {
        name
        id
      }
      createdAt
    }
  }
`

export const GET_CATEGORIES = gql`
  query GetCategories {
    getCategory {
      name
      id
    }
  }
`
export const CREATE_PRODUCT = gql`
  mutation CreateProduct($data: CreateProductInput!, $image: Upload!) {
    createProduct(data: $data, image: $image) {
      id
      name
      imgUrl
    }
  }
`
export const GET_PRODUCT = gql`
  query GetProduct($productId: String!) {
    getProduct(productId: $productId) {
      name
      imgUrl
      id
      costPrice
      salesPrice
      description
      unit
      status
      categories {
        name
        id
      }
    }
  }
`
export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($data: DeleteProductInput!) {
    deleteProduct(data: $data)
  }
`

export const EDIT_PRODUCT = gql`
  mutation UpdateProduct($data: UpdateProductInput, $image: Upload) {
    updateProduct(data: $data, image: $image) {
      id
      name
    }
  }
`
