import { ComponentProps, forwardRef, Ref } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const textArea = tv({
  base: 'w-full font-poppins outline-1  placeholder:text-gray-400 text-gray-700  border-gray-200 border rounded-lg p-3  focus:outline-offset-2 focus:border-emerald-600/20 focus:outline-emerald-600',
  variants: {
    error: {
      true: '  border-rose-500 focus:outline-rose-500  focus:border-rose-500  focus:text-red-500 placeholder:text-red-400 ',
    },
  },
})

type TextAreaProps = ComponentProps<'textarea'> &
  VariantProps<typeof textArea> & {
    children?: React.ReactElement
  }

export const TextArea = forwardRef(function (
  { className, error, ...props }: TextAreaProps,
  ref: Ref<HTMLTextAreaElement> | null,
) {
  return (
    <textarea
      {...props}
      ref={ref}
      className={textArea({ className, error })}
    ></textarea>
  )
})

TextArea.displayName = 'TextAreaInput'
