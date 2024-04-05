import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export function useSignIn() {
  const registerSchema = z.object({
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
  } = useForm<registerSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  return {
    register,
    handleSubmit,
    errors,
  }
}
