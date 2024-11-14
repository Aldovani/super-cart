import { z } from 'zod'

export const createProductSchema = z.object({
  name: z.string().min(8).trim(),
  costPrice: z.coerce.number().min(1),
  salesPrice: z.coerce.number().min(1),
  description: z.string().min(50),
  type: z.enum([
    'Kilogram',
    'Gram',
    'Liter',
    'Milliliter',
    'Piece',
    'Box',
    'Pack',
    'Dozen',
    'Meter',
    'Centimeter',
  ]),
  category: z.coerce.number().array().min(1),
  image: z.custom<File>((v) => v instanceof File, {
    message: 'Image is required',
  }),
})

export type CreateProductSchema = z.infer<typeof createProductSchema>

export type useCreateProductModelProps = {
  onClose: (value: boolean) => void
}
