import { tv, VariantProps } from 'tailwind-variants'

const strengthBar = tv({
  base: 'w-full h-1 bg-gray-200 relative after:origin-left after:transition-all rounded-lg after:h-1 after:block after:rounded-lg   after:w-full after:absolute after:left-0 after:top-0',
  variants: {
    strength: {
      0: ' after:bg-rose-500 after:scale-[20%] ',
      1: '  after:bg-rose-500 after:scale-[20%]',
      2: '  after:bg-yellow-400 after:scale-[40%]',
      3: '  after:bg-emerald-400 after:scale-[60%]',
      4: '  after:bg-emerald-400 after:scale-[80%]',
      5: '  after:bg-emerald-600 after:scale-100',
    },
  },
  defaultVariants: {
    strength: 0,
  },
})

type StrengthBarProps = VariantProps<typeof strengthBar>

export function StrengthBar({ strength = 0 }: StrengthBarProps) {
  return (
    <div className="mt-2 flex flex-col items-end gap-2 w-full">
      <div className={strengthBar({ strength })}></div>
      {strength >= 0 && strength <= 1 && (
        <span className="text-rose-500 text-sm">Senha fraca</span>
      )}
      {strength === 2 && (
        <span className="text-yellow-500 text-sm">Senha Media</span>
      )}
      {strength >= 3 && strength <= 4 && (
        <span className="text-emerald-400 text-sm">Senha forte</span>
      )}
      {strength === 5 && (
        <span className="text-emerald-600 text-sm">Senha Excelente</span>
      )}
    </div>
  )
}
