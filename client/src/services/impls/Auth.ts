import { HTTPClient } from '@/infra/providers/httpClient'
import { HttpResponse } from '@/types/http'

import { IAuthGateway, SignPayload, SignResponse } from '../IAuth'

export class AuthGateway implements IAuthGateway {
  constructor(private HTTPClient: HTTPClient) {}
  async sign(payload: SignPayload): Promise<HttpResponse<SignResponse>> {
    const bodyPayload = {
      email: payload.email,
      senha: payload.password,
    }
    const response = await this.HTTPClient.post<SignResponse>(
      '/signin',
      bodyPayload,
    )
    return response
  }
}
