import { HTTPClient } from '@/infra/providers/httpClient'
import { Seller } from '@/types/Seller'

import { CreateSeller, CreateSellerPayload, SellerGateway } from '../Seller'

export class SellerMainGateway implements SellerGateway {
  constructor(private HTTPClient: HTTPClient) {}

  async create({
    cnpj,
    email,
    password,
  }: CreateSellerPayload): Promise<CreateSeller> {
    const { data, ok, status } = await this.HTTPClient.post<Seller>(
      '/comerciantes',
      {
        cnpj,
        email,
        senha: password,
      },
    )

    return { data, ok, status }
  }
}
