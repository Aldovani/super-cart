import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { tv, VariantProps } from 'tailwind-variants'

const link = tv({
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

type LinkProps = {
  className?: string
  children: React.ReactNode
} & NextLinkProps &
  VariantProps<typeof link>

export function Link({ className, variants, children, ...props }: LinkProps) {
  return (
    <NextLink className={link({ className, variants })} {...props}>
      {children}
    </NextLink>
  )
}
