import { tv, VariantProps } from 'tailwind-variants'

const status = tv({
  base: 'font-medium px-3 py-1 rounded-lg',
  variants: {
    status: {
      unavailable: 'text-rose-500 bg-rose-50',
      available: 'text-emerald-600 bg-emerald-50',
      preparation: 'text-yellow-500 bg-yellow-50',
    },
  },
  defaultVariants: {
    status: 'unavailable',
  },
})

type StatusProps = VariantProps<typeof status>

export function Status({ status: VStatus }: StatusProps) {
  return (
    <span className={status({ status: VStatus })}>
      {VStatus === 'unavailable' && 'Indisponível'}
      {VStatus === 'available' && 'Disponível'}
      {VStatus === 'preparation' && 'Em preparo'}
    </span>
  )
}
