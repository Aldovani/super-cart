import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { z } from 'zod'

import { HttpError } from '@/errors/HttpError'
import { useForms } from '@/hooks/useForms'
import { SellerGateway } from '@/services/Seller'
import { validateCNPJ } from '@/utils/isValidCNPJ'
import { maskCNPJ } from '@/utils/maskCnpj'

const registerSchema = z.object({
  cnpj: z
    .string()
    .min(14, 'Deve conter no mínimo 14 números')
    .transform((value) => value.replace(/\D/g, ''))
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

type onSubmitPayload = {
  cnpj: string
  email: string
  password: string
}

type UseRegisterProps = {
  sellerGateway: SellerGateway
}

export function useRegister({ sellerGateway }: UseRegisterProps) {
  const {
    handleSubmit,
    register,
    reset,
    setError,
    formState: { errors, isValid },
  } = useForms<registerSchema>({
    validator: registerSchema,
  })

  const router = useRouter()
  const { mutate: onSubmit, isPending } = useMutation({
    mutationFn: async ({ cnpj, email, password }: onSubmitPayload) => {
      const data = await sellerGateway.create({ cnpj, email, password })
      return data
    },
    onSuccess: () => {
      toast.success('cadastrado realizado com sucesso')
      router.push('/auth/signin')
      reset()
    },
    onError: (err: HttpError) => {
      if (err.code === 'ALREADY_EXISTS') {
        setError('cnpj', { message: 'CNPJ já cadastrado' })
        return
      }

      toast.error('Erro no servidor')
    },
  })

  return {
    isPending,
    isValid,
    register,
    handleSubmit,
    errors,
    onSubmit,
    maskCNPJ,
  }
}
