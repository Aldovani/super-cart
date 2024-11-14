/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type ChangePasswordMerchantInput = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type CreateAddressInput = {
  cep: Scalars['String']['input'];
  city: Scalars['String']['input'];
  district: Scalars['String']['input'];
  state: Scalars['String']['input'];
  street: Scalars['String']['input'];
};

export type CreateCategoryInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateContactInput = {
  phoneNumber: Scalars['String']['input'];
};

export type CreateMerchantInput = {
  cnpj: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateProductInput = {
  categories: Array<Scalars['Int']['input']>;
  costPrice: Scalars['Float']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  salesPrice: Scalars['Float']['input'];
  unit: ProductUnit;
};

export type DeleteCategoryInput = {
  categoryId: Scalars['Float']['input'];
};

export type DeleteContactInput = {
  id: Scalars['Float']['input'];
};

export type DeleteProductInput = {
  productId: Scalars['String']['input'];
};

export type FilterProductCategoriesInput = {
  id?: InputMaybe<NumberQueryInput>;
  name?: InputMaybe<StringQueryInput>;
};

export type FilterProductInput = {
  categories?: InputMaybe<FilterProductCategoriesInput>;
  costPrice?: InputMaybe<NumberQueryInput>;
  name?: InputMaybe<StringQueryInput>;
  status?: InputMaybe<ProductStatus>;
};

/** Merchant Type */
export enum MerchantType {
  Bakery = 'BAKERY',
  Butcher = 'BUTCHER',
  GreenGrocer = 'GREEN_GROCER',
  IceCreamParlor = 'ICE_CREAM_PARLOR',
  Supermarket = 'SUPERMARKET'
}

export type NumberQueryInput = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
};

/** Product Status */
export enum ProductStatus {
  Available = 'available',
  Preparation = 'preparation',
  Unavailable = 'unavailable'
}

/** Product Unit */
export enum ProductUnit {
  Box = 'Box',
  Centimeter = 'Centimeter',
  Dozen = 'Dozen',
  Gram = 'Gram',
  Kilogram = 'Kilogram',
  Liter = 'Liter',
  Meter = 'Meter',
  Milliliter = 'Milliliter',
  Pack = 'Pack',
  Piece = 'Piece'
}

export type SignInput = {
  cnpj: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type StringQueryInput = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAddressInput = {
  cep: Scalars['String']['input'];
  city: Scalars['String']['input'];
  district: Scalars['String']['input'];
  state: Scalars['String']['input'];
  street: Scalars['String']['input'];
};

export type UpdateBannerMerchantInput = {
  image: Scalars['Upload']['input'];
};

export type UpdateCategoryInput = {
  description: Scalars['String']['input'];
  id: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type UpdateContactInput = {
  id: Scalars['Float']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type UpdateLogoMerchantInput = {
  image: Scalars['Upload']['input'];
};

export type UpdateMerchantInput = {
  cnpj?: InputMaybe<Scalars['String']['input']>;
  corporateName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  minDeliveryValue?: InputMaybe<Scalars['Float']['input']>;
  tradeName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<MerchantType>;
};

export type UpdateProductInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  costPrice?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  salesPrice?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<ProductStatus>;
  unit?: InputMaybe<ProductUnit>;
};

export type AuthMutationVariables = Exact<{
  data: SignInput;
}>;


export type AuthMutation = { __typename?: 'Mutation', Auth: { __typename?: 'Auth', token: string, merchant: { __typename?: 'Merchant', email: string, id: string } } };

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = { __typename?: 'Mutation', SignOut: boolean };

export type RegisterMerchantMutationVariables = Exact<{
  data: CreateMerchantInput;
}>;


export type RegisterMerchantMutation = { __typename?: 'Mutation', createMerchant: { __typename?: 'Merchant', email: string, id: string } };

export type DisableMerchantMutationVariables = Exact<{
  data: UpdateMerchantInput;
}>;


export type DisableMerchantMutation = { __typename?: 'Mutation', updateMerchant: { __typename?: 'Merchant', isActive: boolean } };

export type DeleteMerchantMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteMerchantMutation = { __typename?: 'Mutation', deleteMerchant: boolean };

export type GetMerchantQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMerchantQuery = { __typename?: 'Query', me: { __typename?: 'Merchant', id: string, corporateName?: string | null, tradeName?: string | null, logoUrl?: string | null, bannerUrl?: string | null, cnpj: string, isActive: boolean, isValidated: boolean, email: string, minDeliveryValue?: number | null, type?: MerchantType | null } };

export type QueryProductsQueryVariables = Exact<{
  filter: FilterProductInput;
}>;


export type QueryProductsQuery = { __typename?: 'Query', queryProducts: Array<{ __typename?: 'Product', name: string, id: string, status: ProductStatus, costPrice: number, salesPrice: number, imgUrl: string, unit: ProductUnit, createdAt: any, categories?: Array<{ __typename?: 'Category', name: string, id: string }> | null }> };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', getCategory: Array<{ __typename?: 'Category', name: string, id: string }> };

export type CreateProductMutationVariables = Exact<{
  data: CreateProductInput;
  image: Scalars['Upload']['input'];
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', id: string, name: string, imgUrl: string } };

export type GetProductQueryVariables = Exact<{
  productId: Scalars['String']['input'];
}>;


export type GetProductQuery = { __typename?: 'Query', getProduct: { __typename?: 'Product', name: string, imgUrl: string, id: string, costPrice: number, salesPrice: number, description: string, unit: ProductUnit, status: ProductStatus, categories?: Array<{ __typename?: 'Category', name: string, id: string }> | null } };

export type DeleteProductMutationVariables = Exact<{
  data: DeleteProductInput;
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct: boolean };

export type UpdateProductMutationVariables = Exact<{
  data?: InputMaybe<UpdateProductInput>;
  image?: InputMaybe<Scalars['Upload']['input']>;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct: { __typename?: 'Product', id: string, name: string } };


export const AuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Auth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Auth"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"merchant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<AuthMutation, AuthMutationVariables>;
export const SignOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SignOut"}}]}}]} as unknown as DocumentNode<SignOutMutation, SignOutMutationVariables>;
export const RegisterMerchantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterMerchant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMerchantInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMerchant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RegisterMerchantMutation, RegisterMerchantMutationVariables>;
export const DisableMerchantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DisableMerchant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateMerchantInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMerchant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<DisableMerchantMutation, DisableMerchantMutationVariables>;
export const DeleteMerchantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMerchant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMerchant"}}]}}]} as unknown as DocumentNode<DeleteMerchantMutation, DeleteMerchantMutationVariables>;
export const GetMerchantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMerchant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"corporateName"}},{"kind":"Field","name":{"kind":"Name","value":"tradeName"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerUrl"}},{"kind":"Field","name":{"kind":"Name","value":"cnpj"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"isValidated"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"minDeliveryValue"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<GetMerchantQuery, GetMerchantQueryVariables>;
export const QueryProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queryProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"costPrice"}},{"kind":"Field","name":{"kind":"Name","value":"salesPrice"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<QueryProductsQuery, QueryProductsQueryVariables>;
export const GetCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const CreateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProductInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}}]}}]}}]} as unknown as DocumentNode<CreateProductMutation, CreateProductMutationVariables>;
export const GetProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"costPrice"}},{"kind":"Field","name":{"kind":"Name","value":"salesPrice"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductQuery, GetProductQueryVariables>;
export const DeleteProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<DeleteProductMutation, DeleteProductMutationVariables>;
export const UpdateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProductInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateProductMutation, UpdateProductMutationVariables>;