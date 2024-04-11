import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { maskCNPJ } from '@/utils/maskCnpj'

export function useSignIn() {
  const registerSchema = z.object({
    cnpj: z.string().min(14, 'Deve conter no mínimo 14 números'),
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

  return {
    register,
    handleSubmit,
    errors,
    handleChangeFormatCNPJInput,
  }
}
