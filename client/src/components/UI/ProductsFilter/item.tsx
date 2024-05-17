'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { tv } from 'tailwind-variants'

type ProductsFilterItemProps = {
  category: string
  initial?: boolean
  children: React.ReactNode
}

const productsFilterItem = tv({
  base: 'text-gray-400 hover:text-emerald-600',
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
  initial,
}: ProductsFilterItemProps) {
  const query = useSearchParams()
  const queryCategory = query.get('category')
  const isActive = queryCategory ? queryCategory === category : initial
  return (
    <Link
      href={{ query: { category } }}
      className={productsFilterItem({ isActive })}
    >
      {children}
    </Link>
  )
}
