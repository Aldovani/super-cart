import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { z } from 'zod'

import { maskCNPJ } from '@/utils/maskCnpj'

type SignInPayload = {
  cnpj: string
  password: string
}

export function useSignIn() {
  const registerSchema = z.object({
    cnpj: z
      .string()
      .min(14, 'Deve conter no mínimo 14 números')
      .transform((value) => value.replace(/\D/g, '')),
    password: z.string().min(8, 'Deve conter no minion 8 caracteres'),
  })

  type registerSchema = z.infer<typeof registerSchema>

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
    const token = await signIn('credentials', {
      cnpj,
      password,
      redirect: false,
    })
    console.log(token)
  }

  return {
    register,
    handleSubmit,
    errors,
    handleChangeFormatCNPJInput,
    handleSignIn,
  }
}
