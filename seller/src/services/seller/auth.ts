import { HTTPClient } from '@/infra/providers/httpClient'

import {
  SellerAuthGateway,
  SellerAuthSignPayload,
  SellerAuthSignResponse,
  SignSeller,
} from '../SellerAuth'

export class SellerAuth implements SellerAuthGateway {
  constructor(private HTTPClient: HTTPClient) {}

  async sign({ cnpj, password }: SellerAuthSignPayload): Promise<SignSeller> {
    const { data, ok, status } =
      await this.HTTPClient.post<SellerAuthSignResponse>('/comerciantes/auth', {
        cnpj,
        senha: password,
      })

    return {
      data,
      status,
      ok,
    }
  }
}
