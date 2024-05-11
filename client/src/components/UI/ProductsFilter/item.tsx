'use client'
import Link, { LinkProps } from 'next/link'
import { useSearchParams } from 'next/navigation'
import { tv } from 'tailwind-variants'

type ProductsFilterItemProps = {
  category: string
  children: React.ReactNode
}

const productsFilterItem = tv({
  base: 'text-gray-400',
  variants: {
    isActive: {
      true: 'text-emerald-600',
    },
  },
  defaultVariants: {
    isActive: false,
  },
})

export function ProductsFilterItem({
  category,
  children,
}: ProductsFilterItemProps) {
  const query = useSearchParams()
  const isActive = query.get('category') === category
  return (
    <Link
      href={{ query: { category } }}
      className={productsFilterItem({ isActive })}
    >
      {' '}
      {children}{' '}
    </Link>
  )
}
