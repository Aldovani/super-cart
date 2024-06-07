import { HttpResponse } from '@/types/http'

export type SignPayload = {
  email: string
  password: string
}

export type SignResponse = {
  token: string
}

export interface IAuthGateway {
  sign(payload: SignPayload): Promise<HttpResponse<SignResponse>>
}
