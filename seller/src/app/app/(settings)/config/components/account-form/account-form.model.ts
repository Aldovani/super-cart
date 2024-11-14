import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { accountSchema, AccountSchemaType } from './account-form.schema'

export function useAccountFormModel() {
  const form = useForm<AccountSchemaType>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      cnpj: '',
      email: '',
    },
  })

  return { form }
}
