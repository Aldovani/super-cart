import { HttpResponse } from '@/types/http'
import { Seller } from '@/types/Seller'

type token = {
  type: string
  token: string
  expiresAt: string
}

export type SellerAuthSignResponse = {
  token: token
  comerciante: Seller
}

export type SellerAuthSignPayload = {
  cnpj: string
  password: string
}

export type SignSeller = HttpResponse<SellerAuthSignResponse>

export interface SellerAuthGateway {
  sign(payload: SellerAuthSignPayload): Promise<SignSeller>
}
