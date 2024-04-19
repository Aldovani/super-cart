import { ComponentProps } from 'react'

import { useDropDown } from './Context'

type TriggerProps = {
  children: React.ReactNode
  className?: string
} & ComponentProps<'button'>

export function Trigger({ children, className }: TriggerProps) {
  const { handleToggle } = useDropDown()

  return (
    <button className={`cursor-pointer ${className}`} onClick={handleToggle}>
      {children}
    </button>
  )
}
