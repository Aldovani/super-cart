import { DefaultSession } from 'next-auth'

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
  seller: Seller
}

declare module 'next-auth/jwt' {
  interface JWT {
    idToken?: string
    accessToken: string
    expiresAt: string
  }
}

declare module 'next-auth' {
  interface Session {
    user: {
      idToken?: string
      tokenExpiresAte?: string
      accessToken?: string
    } & DefaultSession['user']
  }
}
