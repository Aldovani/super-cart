import { HttpResponse } from '@/types/http'
import { Seller } from '@/types/Seller'

export type CreateSellerPayload = {
  cnpj: string
  email: string
  password: string
}

type CreateSellerResponse = Seller

export type CreateSeller = HttpResponse<CreateSellerResponse>

export interface SellerGateway {
  create(payload: CreateSellerPayload): Promise<CreateSeller>
}
