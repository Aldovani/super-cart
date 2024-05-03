import { fetchHttpClient } from '@/infra/providers/impls/httpClient/fetchHttpClient'

type SellerAuthenticatePayload = {
  cnpj: string
  password: string
}
type token = {
  type: string
  token: string
  expiresAt: string
}

type Seller = {
  idComerciante: number
  razaoSocial: string | null
  logoUrl: string | null
  bannerUrl: string | null
  cnpj: string
  ativo: number
  validado: number
  email: string
  valorMinEntrega: number | null
  tipo: string
  dataCriacao: string
  dataMod: string
}
export type SellerAuthenticateResponseBody = {
  token: token
  comerciante: Seller
}

export async function SellerAuthenticate({
  cnpj,
  password,
}: SellerAuthenticatePayload) {
  try {
    const seller = await fetchHttpClient.post<SellerAuthenticateResponseBody>(
      '/comerciantes/auth',
      { cnpj, senha: password },
    )

    return seller
  } catch (err) {
    return null
  }
}
