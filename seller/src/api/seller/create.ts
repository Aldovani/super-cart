import { fetchHttpClient } from '@/infra/providers/impls/httpClient/fetchHttpClient'

type CreateSellerPayload = {
  cnpj: string
  password: string
  email: string
}

type CreateSellerResponse = {
  razaoSocial: string
  cnpj: string
  email: string
  dataMod: string
  dataCriacao: string
  idComerciante: number
}

export async function CreateSeller({
  cnpj,
  password,
  email,
}: CreateSellerPayload) {
  try {
    const seller = fetchHttpClient.post<CreateSellerResponse>('/comerciantes', {
      cnpj,
      senha: password,
      email,
    })

    return seller
  } catch (err) {
    console.log(err)
    return err
  }
}
