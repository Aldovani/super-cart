import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

import { useDropDown } from './Context'

const body = tv({
  base: 'shadow-sm absolute bottom-0 translate-y-[calc(100%_+_8px)] bg-white border border-gray-200 rounded-lg z-30',
})

type BodyProps = {
  children: React.ReactElement
} & ComponentProps<'div'>

export function Body({ children, className }: BodyProps) {
  const { isOpen } = useDropDown()

  return isOpen && <div className={body({ className })}>{children}</div>
}
