import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const createProductSchema = z.object({
  name: z.string().min(8).trim(),
  price: z.coerce.number().min(1),
  quantity: z.coerce.number().min(1),
  description: z.string().min(50),
  type: z.enum(['killograma']),
  category: z.enum(['killograma']),
  image: z.custom<File>((v) => v instanceof File, {
    message: 'Image is required',
  }),
})

type createProductSchema = z.infer<typeof createProductSchema>

export function useCreateProduct() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<createProductSchema>({
    resolver: zodResolver(createProductSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  return {
    register,
    handleSubmit,
    errors,
    getValues,
  }
}
