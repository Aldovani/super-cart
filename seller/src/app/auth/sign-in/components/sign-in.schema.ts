import { z } from 'zod'

export const signInSchema = z.object({
  cnpj: z
    .string()
    .min(14, 'Deve conter no mínimo 14 números')
    .transform((value) => value.replace(/\D/g, '')),
  password: z.string().min(8, 'Deve conter no minion 8 caracteres'),
})

export type SignInSchemaType = z.infer<typeof signInSchema>
