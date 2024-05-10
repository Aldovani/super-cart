import { ComponentProps, forwardRef, Ref } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const field = tv({
  base: 'w-full font-poppins outline-1 outline-none placeholder:text-gray-400 text-gray-700  border-gray-200 border rounded-lg p-3  focus:ring-2 ring-gray-300 ring-offset-4 ',
  variants: {
    error: {
      true: '  border-rose-500  focus:ring-rose-600',
    },
    sizes: {
      small: 'text-sm  h-10',
      medium: 'text-base h-12',
    },
  },
})

type FieldProps = ComponentProps<'input'> &
  VariantProps<typeof field> & {
    children?: React.ReactElement
  }

export const Field = forwardRef(function (
  { error, sizes = 'medium', className, children, ...props }: FieldProps,
  ref: Ref<HTMLInputElement> | null,
) {
  return (
    <div className="relative w-full">
      <input
        className={field({ error, sizes, className })}
        ref={ref}
        {...props}
      />

      {children}
    </div>
  )
})

Field.displayName = 'InputField'
