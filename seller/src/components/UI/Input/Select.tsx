import { ComponentProps, forwardRef, Ref } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const select = tv({
  base: 'w-full font-poppins outline-1  placeholder:text-gray-400 text-gray-700  border-gray-200 border rounded-lg p-3  focus:ring-2 ring-gray-300 ring-offset-4 ',
  variants: {
    error: {
      true: '  border-rose-600  focus:ring-rose-600 ',
    },
  },
})

type SelectProps = ComponentProps<'select'> &
  VariantProps<typeof select> & {
    children?: React.ReactNode
  }

export const Select = forwardRef(function (
  { children, className, error, ...props }: SelectProps,
  ref: Ref<HTMLSelectElement> | null,
) {
  return (
    <div className="relative w-full">
      <select {...props} ref={ref} className={select({ className, error })}>
        {children}
      </select>
    </div>
  )
})

Select.displayName = 'SelectInput'
