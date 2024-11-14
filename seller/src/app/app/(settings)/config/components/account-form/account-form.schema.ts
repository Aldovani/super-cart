import { z } from 'zod'

export const accountSchema = z.object({
  cnpj: z
    .string()
    .min(14, 'Deve conter no mínimo 14 números')
    .transform((value) => value.replace(/\D/g, '')),
  email: z.string().email(),
})

export type AccountSchemaType = z.infer<typeof accountSchema>
