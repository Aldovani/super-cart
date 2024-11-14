import { useForm } from 'react-hook-form'

export function useContactsFormModel() {
  const form = useForm({})

  return { form }
}
