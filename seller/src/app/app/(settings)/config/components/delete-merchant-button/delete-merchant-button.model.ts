import { useMutation } from '@apollo/client'

import { DeleteMerchantMutation } from '@/graphql/generated/graphql'
import { DELETE_MERCHANT } from '@/graphql/queries'

export function useDeleteMerchantButtonModel() {
  const [mutation] = useMutation<DeleteMerchantMutation>(DELETE_MERCHANT)

  async function handleDeleteMerchant() {
    await mutation()
  }

  return { handleDeleteMerchant }
}
