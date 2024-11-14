import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { profileFormSchema, ProfileFormSchemaType } from './profile-form.schema'

export function useProfileFormModel() {
  const form = useForm<ProfileFormSchemaType>({
    resolver: zodResolver(profileFormSchema),
  })

  return { form }
}
