import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'w-full  h-12 flex items-center justify-center leading-[24px] py-4 rounded-lg font-medium text-lg ',
  variants: {
    variants: {
      primary:
        'bg-emerald-600 text-gray-50 hover:opacity-90 transition-opacity ',
      secondary:
        'border border-gray-200 text-gray-500 bg-white hover:bg-gray-100 transition-colors ',
    },
  },
  defaultVariants: {
    variants: 'primary',
  },
})

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    children?: React.ReactNode
  }
export function Button({ children, className, variants, ...res }: ButtonProps) {
  return (
    <button {...res} className={button({ className, variants })}>
      {children}
    </button>
  )
}
