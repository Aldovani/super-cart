import { z } from 'zod'

import validateCNPJ from '@/utils/isValidCNPJ'

export const registerSchema = z.object({
  cnpj: z
    .string()
    .min(14, 'Deve conter no mínimo 14 números')
    .transform((value) => value.replace(/\D/g, ''))
    .refine((value) => validateCNPJ(value), 'CNPJ invalido'),
  email: z.string().email('Email invalido'),
  password: z
    .string()
    .min(8, 'Deve conter no mínimo 8 caracteres')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?.&])[A-Za-z\d@$!%*?.&]{8,}$/,
      'Senha deve conter letra maiúscula e minuscula , numero e um carácter especial ',
    ),
})

export type registerSchema = z.infer<typeof registerSchema>
