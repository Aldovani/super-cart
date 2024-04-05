import { ComponentProps, forwardRef, Ref, useEffect, useState } from 'react'

import { verifyStrengthPassword } from '@/utils/verifyStrengthPassword'

import { Input } from '../Input'

import { StrengthBar } from './strengthBar'

type PasswordProps = ComponentProps<'input'> & {
  children?: React.ReactElement
  error?: boolean
  value: string
}

export const Password = forwardRef(function (
  { value, ...props }: PasswordProps,

  ref: Ref<HTMLInputElement> | null,
) {
  const [strength, setStrength] = useState(0)

  useEffect(() => {
    const passwordStrength = verifyStrengthPassword(value)
    setStrength(passwordStrength)
  }, [value, strength])

  return (
    <div className="relative w-full">
      <Input.Field ref={ref} type="password" {...props} />
      {value?.length > 0 && (
        <StrengthBar strength={strength as 0 | 1 | 2 | 3 | 4 | 5} />
      )}
    </div>
  )
})

Password.displayName = 'InputField'
