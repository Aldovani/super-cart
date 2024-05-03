import { fetchHttpClient } from '@/infra/providers/impls/httpClient/fetchHttpClient'

type CreateSellerPayload = {
  id?: string
  accessToken?: string
}

export async function SellerProfile({ id }: CreateSellerPayload) {
  try {
    const profile = await fetchHttpClient.get(`/comerciantes/${id}`, {})

    return profile
  } catch (err) {
    return null
  }
}
