import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { z } from 'zod'

import { maskCNPJ } from '@/utils/maskCnpj'

type SignInPayload = {
  cnpj: string
  password: string
}

const registerSchema = z.object({
  cnpj: z
    .string()
    .min(14, 'Deve conter no mínimo 14 números')
    .transform((value) => value.replace(/\D/g, '')),
  password: z.string().min(8, 'Deve conter no minion 8 caracteres'),
})

type registerSchema = z.infer<typeof registerSchema>

export function useSignIn() {
  const navigation = useRouter()
  const searchParams = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<registerSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  function handleChangeFormatCNPJInput(value: string) {
    setValue('cnpj', maskCNPJ(value))
  }

  async function handleSignIn({ cnpj, password }: SignInPayload) {
    await signIn('credentials', {
      cnpj,
      password,
      redirect: false,
    })
    const callbackUrl =
      searchParams.get('callbackUrl') || 'http://localhost:3000/app/dashboard'

    navigation.push(callbackUrl)
  }

  return {
    register,
    handleSubmit,
    errors,
    handleChangeFormatCNPJInput,
    handleSignIn,
  }
}
