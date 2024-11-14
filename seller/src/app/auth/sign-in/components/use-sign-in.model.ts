import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import {
  AuthMutation,
  AuthMutationVariables,
} from '@/graphql/generated/graphql'
import { SIGN_IN_MERCHANT } from '@/graphql/queries'
import { maskCNPJ } from '@/utils/maskCnpj'

import { signInSchema, SignInSchemaType } from './sign-in.schema'

type SignInPayload = {
  cnpj: string
  password: string
}

export function useSignInModel() {
  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      cnpj: '',
      password: '',
    },
  })
  const navigation = useRouter()

  const [signIn, { loading, error }] = useMutation<
    AuthMutation,
    AuthMutationVariables
  >(SIGN_IN_MERCHANT, {
    onCompleted: () => {
      form.reset()
      navigation.push('/app')
    },
    onError: (err) => {
      if (err.message === 'CredentialsSignin') {
        toast.error('credencias invalidas')
        form.setError('cnpj', { message: 'credencias invalidas' })
        form.setError('password', { message: 'credencias invalidas' })
      }
    },
  })

  async function handleSignIn({ cnpj, password }: SignInPayload) {
    await signIn({
      variables: {
        data: {
          cnpj,
          password,
        },
      },
    })
  }

  return {
    form,
    error,
    handleSignIn,
    loading,
    maskCNPJ,
  }
}
