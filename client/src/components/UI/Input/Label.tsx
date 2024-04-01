import { ComponentProps } from 'react'

type LabelProps = ComponentProps<'label'> & {
  children: React.ReactElement
  name: string
}

export function Label({ name, children, ...res }: LabelProps) {
  return (
    <label {...res}>
      <span className="text-gray-600">{name}</span>
      {children}
    </label>
  )
}
