import { API_BASE_URL } from '@/constants'

type SellerAuthenticatePayload = {
  cnpj: string
  password: string
}
type token = {
  type: string
  token: string
  abilities: string[]
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
  seller: Seller
}

export async function SellerAuthenticate({
  cnpj,
  password,
}: SellerAuthenticatePayload) {
  const body = JSON.stringify({ cnpj, senha: password })

  try {
    const seller = await fetch(`${API_BASE_URL}/comerciantes/auth`, {
      body,
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
    })

    // const sellerToJson = (await seller.json()) as SellerAuthenticateResponseBody
    return seller
  } catch (err) {
    return null
  }
}
