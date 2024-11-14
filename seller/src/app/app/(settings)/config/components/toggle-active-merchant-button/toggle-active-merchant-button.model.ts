import { useMutation } from '@apollo/client'
import { toast } from 'sonner'

import {
  DisableMerchantMutation,
  DisableMerchantMutationVariables,
} from '@/graphql/generated/graphql'
import { DISABLE_MERCHANT } from '@/graphql/queries'
import { useMerchantStore } from '@/stores/merchant'

export function useToggleActiveMerchantButtonModel() {
  const merchantIsActive = useMerchantStore((state) => state.merchant.isActive)
  const updateIsActive = useMerchantStore((state) => state.update)

  const [mutation, { loading }] = useMutation<
    DisableMerchantMutation,
    DisableMerchantMutationVariables
  >(DISABLE_MERCHANT, {
    onCompleted: (data) => {
      data.updateMerchant.isActive
        ? toast.success('Conta ativada')
        : toast.success('Conta desativada')
      updateIsActive({ isActive: data.updateMerchant.isActive })
    },
    onError: () => {
      toast.error('Erro ao desativado a conta')
    },
  })

  async function handleToggleActiveMerchant(isActive: boolean) {
    await mutation({
      variables: {
        data: {
          isActive: !isActive,
        },
      },
    })
  }

  return {
    merchantIsActive,
    handleToggleActiveMerchant,
    loading,
  }
}
