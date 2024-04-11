import { ComponentProps } from 'react'

type LabelProps = ComponentProps<'label'> & {
  children: React.ReactElement
  name: string
  isRequired?: boolean
}

export function Label({
  name,
  isRequired = false,
  children,
  className,
  ...res
}: LabelProps) {
  return (
    <label {...res} className={`flex flex-col gap-2 ${className}`}>
      <span className="text-gray-600">
        {name} {isRequired && <span className="text-rose-600">*</span>}
      </span>
      {children}
    </label>
  )
}
