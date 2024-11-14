import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { changePasswordSchema } from './change-password-form.schema'

export function useChangePasswordFormModel() {
  const form = useForm({
    resolver: zodResolver(changePasswordSchema),
  })

  return { form }
}
