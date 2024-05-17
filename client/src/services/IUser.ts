import { HttpResponse } from '@/types/http'

export type CreatePayload = {
  email: string
  name: string
  password: string
  cpf: string
  cellphone: string
}

export type CreatePayloadResponse = {
  nome: string
  email: string
  cpf: string
  ativo: boolean
  validado: boolean
  dataMod: string
  dataCriacao: string
  idUsuario: number
}

export interface IUserGateway {
  create(payload: CreatePayload): Promise<HttpResponse<CreatePayloadResponse>>
}
