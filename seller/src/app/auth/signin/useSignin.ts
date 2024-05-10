import { useMutation } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { toast } from 'sonner'
import { z } from 'zod'

import { useForms } from '@/hooks/useForms'
import { maskCNPJ } from '@/utils/maskCnpj'

type SignInPayload = {
  cnpj: string
  password: string
}

const signInSchema = z.object({
  cnpj: z
    .string()
    .min(14, 'Deve conter no mínimo 14 números')
    .transform((value) => value.replace(/\D/g, '')),
  password: z.string().min(8, 'Deve conter no minion 8 caracteres'),
})

type signInSchema = z.infer<typeof signInSchema>

export function useSignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForms<signInSchema>({
    validator: signInSchema,
  })

  const navigation = useRouter()
  const searchParams = useSearchParams()

  const { mutate: handleSignIn, isPending } = useMutation({
    mutationFn: async ({ cnpj, password }: SignInPayload) => {
      const data = await signIn('credentials', {
        cnpj,
        password,
        redirect: false,
      })

      if (data?.error) {
        console.log(data)
        throw new Error(data.error)
      }
    },
    onSuccess: () => {
      const callbackUrl =
        searchParams.get('callbackUrl') || 'http://localhost:3000/app/dashboard'
      navigation.push(callbackUrl)
    },
    onError: (err) => {
      console.log(err)

      if (err.message === 'CredentialsSignin') {
        toast.error('credencias invalidas')

        setError('cnpj', { message: 'credencias invalidas' })
        setError('password', { message: 'credencias invalidas' })
      }
    },
  })

  return {
    register,
    handleSubmit,
    errors,
    handleSignIn,
    isValid,
    isPending,
    maskCNPJ,
  }
}
