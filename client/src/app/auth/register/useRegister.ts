import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { z } from 'zod'

import { CreatePayload, IUserGateway } from '@/services/IUser'
import { isValidCellphone } from '@/utils/isValidCellphone'
import { maskCellphone } from '@/utils/maskCellphone'
import { maskCPF } from '@/utils/maskCPF'

type UseRegisterProps = {
  userGateway: IUserGateway
}

export function useRegister({ userGateway }: UseRegisterProps) {
  const registerSchema = z.object({
    name: z.string().min(8, 'Deve conter no mínimo 8 caracteres'),
    cpf: z
      .string()
      .max(14)
      .min(14, 'Deve conter no mínimo 14 números')
      .transform((value) => value.replace(/\D/g, '')),
    cellphone: z
      .string()
      .max(15)
      .min(14, 'Deve conter no mínimo 14 caracteres')
      .transform((value) => value.replace(/\D/g, ''))
      .refine((data) => isValidCellphone(data), 'Número de telefone invalido'),
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
    watch,
    setValue,
  } = useForm<registerSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  function handleChangeCPF(value: string) {
    setValue('cpf', maskCPF(value))
  }
  function handleChangeCellphone(value: string) {
    setValue('cellphone', maskCellphone(value))
  }

  const { mutate: handleCreateUser, isPending } = useMutation({
    mutationFn: async (payload: CreatePayload) => {
      userGateway.create(payload)
    },
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (data) => {
      console.log(data)
    },
  })

  return {
    handleCreateUser,
    isPending,
    register,
    handleSubmit,
    errors,
    watch,
    handleChangeCPF,
    handleChangeCellphone,
  }
}
