import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { isValidCellphone } from '@/utils/isValidCellphone'
import { isValidCPF } from '@/utils/isValidCPF'
import { maskCellphone } from '@/utils/maskCellphone'
import { maskCPF } from '@/utils/maskCPF'

export function useRegister() {
  const registerSchema = z
    .object({
      name: z.string().min(8, 'Deve conter no mínimo 8 caracteres'),
      cpf: z.string().max(14).min(14, 'Deve conter no mínimo 14 números'),
      cellphone: z
        .string()
        .max(15)
        .min(14, 'Deve conter no mínimo 14 caracteres')
        .refine(
          (data) => isValidCellphone(data),
          'Número de telefone invalido',
        ),
      email: z.string().email('Email invalido'),
      password: z
        .string()
        .min(8, 'Deve conter no minion 8 caracteres')
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?.&])[A-Za-z\d@$!%*?.&]{8,}$/,
          'Senha deve conter letra maiúscula e minuscula , numero e um carácter especial ',
        ),
    })
    .superRefine((val, ctx) => {
      if (!isValidCPF(val.cpf)) {
        ctx.addIssue({ message: 'CPF invalido', code: 'custom', path: ['cpf'] })
      }
    })

  type registerSchema = z.infer<typeof registerSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<registerSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  function handleChangeCPF(value: string) {
    setValue('cpf', maskCPF(value))
  }
  function handleChangeCellphone(value: string) {
    setValue('cellphone', maskCellphone(value))
  }

  return {
    register,
    handleSubmit,
    errors,
    handleChangeCPF,
    handleChangeCellphone,
  }
}
