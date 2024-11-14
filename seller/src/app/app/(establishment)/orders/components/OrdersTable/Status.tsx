import { tv, VariantProps } from 'tailwind-variants'

const status = tv({
  base: 'font-medium px-3 py-1 rounded-lg',
  variants: {
    status: {
      canceled: 'text-rose-500 bg-rose-50',
      finished: 'text-emerald-600 bg-emerald-50',
      preparation: 'text-yellow-500 bg-yellow-50',
    },
  },
  defaultVariants: {
    status: 'canceled',
  },
})

type StatusProps = VariantProps<typeof status>

export function Status({ status: VStatus }: StatusProps) {
  return (
    <span className={status({ status: VStatus })}>
      {VStatus === 'canceled' && 'Cancelado'}
      {VStatus === 'finished' && 'Concluído'}
      {VStatus === 'preparation' && 'Em preparo'}
    </span>
  )
}
