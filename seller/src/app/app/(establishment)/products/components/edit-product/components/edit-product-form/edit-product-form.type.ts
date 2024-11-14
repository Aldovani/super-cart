import { z } from 'zod'

import { ProductStatus, ProductUnit } from '@/graphql/generated/graphql'

export const editProductSchema = z.object({
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
  category: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .array()
    .min(1),
  status: z.enum(['available', 'preparation', 'unavailable']),

  image: z
    .custom<File>((v) => v instanceof File, {
      message: 'Image is required',
    })
    .optional(),
})

export type EditProductSchema = z.infer<typeof editProductSchema>

export type useEditProductModelProps = {
  onClose: (value: boolean) => void
  productId: string
  initialData: Partial<EditProductSchema>
}

export type GetProduct = {
  name: string
  imgUrl: string
  id: string
  costPrice: number
  salesPrice: number
  description: string
  unit: ProductUnit
  status: ProductStatus
  categories?: Array<{
    name: string
    id: string
  }> | null
}
