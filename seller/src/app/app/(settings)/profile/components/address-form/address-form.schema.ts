import { z } from 'zod'

export const addressFormSchema = z.object({
  cep: z.string(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  district: z.string(),
})

export type AddressFormSchemaType = z.infer<typeof addressFormSchema>
