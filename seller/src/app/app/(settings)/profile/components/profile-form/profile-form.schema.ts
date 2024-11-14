import { z } from 'zod'

export const profileFormSchema = z.object({
  corporateName: z.string(),
  tradeName: z.string(),
  minDeliveryValue: z.coerce.number(),
  type: z.enum([
    'SUPERMARKET',
    'GREEN_GROCER',
    'BUTCHER',
    'BAKERY',
    'ICE_CREAM_PARLOR',
  ]),
})

export type ProfileFormSchemaType = z.infer<typeof profileFormSchema>
