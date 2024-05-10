import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const body = tv({ base: 'bg-white rounded-xl p-8' })

type BodyProps = {
  children: React.ReactNode
} & ComponentProps<'main'>

export function Body({ children, className }: BodyProps) {
  return <main className={body({ className })}>{children}</main>
}
