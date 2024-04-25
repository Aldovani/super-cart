import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const label = tv({
  base: 'flex flex-col gap-2',
})

type LabelProps = ComponentProps<'label'> & {
  children: React.ReactElement
  name: string
  description?: string
  isRequired?: boolean
} & VariantProps<typeof label>

export function Label({
  name,
  isRequired = false,
  children,
  className,
  description,
  ...res
}: LabelProps) {
  return (
    <label {...res} className={label({ className })}>
      <div>
        <span className="text-gray-600">
          {name} {isRequired && <span className="text-rose-600">*</span>}
        </span>
        {description && <p className="text-gray-400 text-sm">{description}</p>}
      </div>
      {children}
    </label>
  )
}
