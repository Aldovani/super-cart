import { HTTPClient } from '@/infra/providers/httpClient'
import { HttpResponse } from '@/types/http'

import { CreatePayload, CreatePayloadResponse, IUserGateway } from '../IUser'

export class UserGateway implements IUserGateway {
  constructor(private HTTPClient: HTTPClient) {}

  async create(
    payload: CreatePayload,
  ): Promise<HttpResponse<CreatePayloadResponse>> {
    const user = {
      email: payload.email,
      senha: payload.password,
      nome: payload.name,
      cpf: payload.cpf,
      telefones: [
        {
          tipo: 'CELULAR',
          numero: payload.cellphone,
        },
      ],
    }
    const response = await this.HTTPClient.post<CreatePayloadResponse>(
      '/usuarios',
      user,
    )

    return response
  }
}
