import { ComponentProps, forwardRef, Ref } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const select = tv({
  base: 'w-full font-poppins outline-1  placeholder:text-gray-400 text-gray-700  border-gray-200 border rounded-lg p-3  focus:outline-offset-2 focus:border-emerald-600/20 focus:outline-emerald-600',
  variants: {
    error: {
      true: '  border-rose-500 focus:outline-rose-500  focus:border-rose-500  focus:text-red-500 placeholder:text-red-400 ',
    },
  },
})

type SelectProps = ComponentProps<'select'> &
  VariantProps<typeof select> & {
    children?: React.ReactElement
  }

export const Select = forwardRef(function (
  { children, ...props }: SelectProps,
  ref: Ref<HTMLSelectElement> | null,
) {
  return (
    <div className="relative w-full">
      <select {...props} ref={ref} className={select()}>
        <option value="">as</option>
        {children}
      </select>
    </div>
  )
})

Select.displayName = 'SelectInput'
