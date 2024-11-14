import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import {
  RegisterMerchantMutation,
  RegisterMerchantMutationVariables,
} from '@/graphql/generated/graphql'
import { REGISTER_MERCHANT } from '@/graphql/queries'
import { maskCNPJ } from '@/utils/maskCnpj'

import { registerSchema } from './register.schema'

type onSubmitPayload = {
  cnpj: string
  email: string
  password: string
}

export function useRegisterModel() {
  const router = useRouter()

  const form = useForm<registerSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'all',
    defaultValues: {
      cnpj: '',
      email: '',
      password: '',
    },
  })

  const [registerMerchant, { loading, error }] = useMutation<
    RegisterMerchantMutation,
    RegisterMerchantMutationVariables
  >(REGISTER_MERCHANT, {
    onCompleted: () => {
      form.reset()
      toast.success('Cadastro realizado com sucesso')
      router.push('/auth/sign-in')
    },
    onError: () => {
      toast.error('Error ao realizar o cadastro')
    },
  })

  async function handleRegisterMerchant(data: onSubmitPayload) {
    await registerMerchant({
      variables: {
        data,
      },
    })
  }

  return {
    form,
    maskCNPJ,
    handleRegisterMerchant,
    error,
    loading,
  }
}

export type useRegisterModelType = ReturnType<typeof useRegisterModel>
