import Link, { LinkProps } from 'next/link'
import { tv, VariantProps } from 'tailwind-variants'

const linkItem = tv({
  base: 'text-gray-500 text-sm font-medium flex gap-3 items-center hover:text-emerald-600 [&:hover>*]:!text-emerald-600',
})

type LinkItemProps = {
  children: React.ReactNode
  className?: string
} & LinkProps &
  VariantProps<typeof linkItem>

export function LinkItem({ children, className, ...rest }: LinkItemProps) {
  return (
    <Link {...rest} className={linkItem({ className })}>
      {children}
    </Link>
  )
}
