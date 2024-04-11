import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { validateCNPJ } from '@/utils/isValidCNPJ'
import { maskCNPJ } from '@/utils/maskCnpj'

export function useRegister() {
  const registerSchema = z.object({
    cnpj: z
      .string()
      .min(14, 'Deve conter no mínimo 14 números')
      .refine((value) => validateCNPJ(value), 'CNPJ invalido'),
    email: z.string().email('Email invalido'),
    password: z
      .string()
      .min(8, 'Deve conter no minion 8 caracteres')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?.&])[A-Za-z\d@$!%*?.&]{8,}$/,
        'Senha deve conter letra maiúscula e minuscula , numero e um carácter especial ',
      ),
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
