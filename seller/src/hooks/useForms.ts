import { FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ZodType } from 'zod'

type useFormsPros = {
  validator: ZodType
  mode?: 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched' | 'all' | undefined
  reValidateMode?: 'onBlur' | 'onChange' | 'onSubmit' | undefined
}

export function useForms<T extends FieldValues = FieldValues>({
  validator,
  mode = 'onSubmit',
  reValidateMode = 'onChange',
}: useFormsPros) {
  const data = useForm<T>({
    resolver: zodResolver(validator),
    mode,
    reValidateMode,
  })

  return {
    ...data,
  }
}
