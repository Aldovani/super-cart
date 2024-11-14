/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  mutation Auth($data: SignInput!) {\n    Auth(data: $data) {\n      token\n      merchant {\n        email\n        id\n      }\n    }\n  }\n": types.AuthDocument,
    "\n  mutation SignOut {\n    SignOut\n  }\n": types.SignOutDocument,
    "\n  mutation RegisterMerchant($data: CreateMerchantInput!) {\n    createMerchant(data: $data) {\n      email\n      id\n    }\n  }\n": types.RegisterMerchantDocument,
    "\n  mutation DisableMerchant($data: UpdateMerchantInput!) {\n    updateMerchant(data: $data) {\n      isActive\n    }\n  }\n": types.DisableMerchantDocument,
    "\n  mutation DeleteMerchant {\n    deleteMerchant\n  }\n": types.DeleteMerchantDocument,
    "\n  query GetMerchant {\n    me {\n      id\n      corporateName\n      tradeName\n      logoUrl\n      bannerUrl\n      cnpj\n      isActive\n      isValidated\n      email\n      minDeliveryValue\n      type\n    }\n  }\n": types.GetMerchantDocument,
    "\n  query QueryProducts($filter: FilterProductInput!) {\n    queryProducts(filter: $filter) {\n      name\n      id\n      status\n      costPrice\n      salesPrice\n      imgUrl\n      unit\n      categories {\n        name\n        id\n      }\n      createdAt\n    }\n  }\n": types.QueryProductsDocument,
    "\n  query GetCategories {\n    getCategory {\n      name\n      id\n    }\n  }\n": types.GetCategoriesDocument,
    "\n  mutation CreateProduct($data: CreateProductInput!, $image: Upload!) {\n    createProduct(data: $data, image: $image) {\n      id\n      name\n      imgUrl\n    }\n  }\n": types.CreateProductDocument,
    "\n  query GetProduct($productId: String!) {\n    getProduct(productId: $productId) {\n      name\n      imgUrl\n      id\n      costPrice\n      salesPrice\n      description\n      unit\n      status\n      categories {\n        name\n        id\n      }\n    }\n  }\n": types.GetProductDocument,
    "\n  mutation DeleteProduct($data: DeleteProductInput!) {\n    deleteProduct(data: $data)\n  }\n": types.DeleteProductDocument,
    "\n  mutation UpdateProduct($data: UpdateProductInput, $image: Upload) {\n    updateProduct(data: $data, image: $image) {\n      id\n      name\n    }\n  }\n": types.UpdateProductDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Auth($data: SignInput!) {\n    Auth(data: $data) {\n      token\n      merchant {\n        email\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Auth($data: SignInput!) {\n    Auth(data: $data) {\n      token\n      merchant {\n        email\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SignOut {\n    SignOut\n  }\n"): (typeof documents)["\n  mutation SignOut {\n    SignOut\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RegisterMerchant($data: CreateMerchantInput!) {\n    createMerchant(data: $data) {\n      email\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation RegisterMerchant($data: CreateMerchantInput!) {\n    createMerchant(data: $data) {\n      email\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DisableMerchant($data: UpdateMerchantInput!) {\n    updateMerchant(data: $data) {\n      isActive\n    }\n  }\n"): (typeof documents)["\n  mutation DisableMerchant($data: UpdateMerchantInput!) {\n    updateMerchant(data: $data) {\n      isActive\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteMerchant {\n    deleteMerchant\n  }\n"): (typeof documents)["\n  mutation DeleteMerchant {\n    deleteMerchant\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetMerchant {\n    me {\n      id\n      corporateName\n      tradeName\n      logoUrl\n      bannerUrl\n      cnpj\n      isActive\n      isValidated\n      email\n      minDeliveryValue\n      type\n    }\n  }\n"): (typeof documents)["\n  query GetMerchant {\n    me {\n      id\n      corporateName\n      tradeName\n      logoUrl\n      bannerUrl\n      cnpj\n      isActive\n      isValidated\n      email\n      minDeliveryValue\n      type\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query QueryProducts($filter: FilterProductInput!) {\n    queryProducts(filter: $filter) {\n      name\n      id\n      status\n      costPrice\n      salesPrice\n      imgUrl\n      unit\n      categories {\n        name\n        id\n      }\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query QueryProducts($filter: FilterProductInput!) {\n    queryProducts(filter: $filter) {\n      name\n      id\n      status\n      costPrice\n      salesPrice\n      imgUrl\n      unit\n      categories {\n        name\n        id\n      }\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCategories {\n    getCategory {\n      name\n      id\n    }\n  }\n"): (typeof documents)["\n  query GetCategories {\n    getCategory {\n      name\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateProduct($data: CreateProductInput!, $image: Upload!) {\n    createProduct(data: $data, image: $image) {\n      id\n      name\n      imgUrl\n    }\n  }\n"): (typeof documents)["\n  mutation CreateProduct($data: CreateProductInput!, $image: Upload!) {\n    createProduct(data: $data, image: $image) {\n      id\n      name\n      imgUrl\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProduct($productId: String!) {\n    getProduct(productId: $productId) {\n      name\n      imgUrl\n      id\n      costPrice\n      salesPrice\n      description\n      unit\n      status\n      categories {\n        name\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProduct($productId: String!) {\n    getProduct(productId: $productId) {\n      name\n      imgUrl\n      id\n      costPrice\n      salesPrice\n      description\n      unit\n      status\n      categories {\n        name\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteProduct($data: DeleteProductInput!) {\n    deleteProduct(data: $data)\n  }\n"): (typeof documents)["\n  mutation DeleteProduct($data: DeleteProductInput!) {\n    deleteProduct(data: $data)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateProduct($data: UpdateProductInput, $image: Upload) {\n    updateProduct(data: $data, image: $image) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProduct($data: UpdateProductInput, $image: Upload) {\n    updateProduct(data: $data, image: $image) {\n      id\n      name\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;