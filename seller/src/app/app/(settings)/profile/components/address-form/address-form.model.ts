import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { addressFormSchema, AddressFormSchemaType } from './address-form.schema'

export function useAddressFormModel() {
  const form = useForm<AddressFormSchemaType>({
    resolver: zodResolver(addressFormSchema),
  })
  return { form }
}
