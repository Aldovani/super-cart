'use client'

import { useModal } from './Context'

type TriggerProps = {
  children: React.ReactNode
}

export function Trigger({ children }: TriggerProps) {
  const { open } = useModal()

  return <div onClick={open}>{children}</div>
}
