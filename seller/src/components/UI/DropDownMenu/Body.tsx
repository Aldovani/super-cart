import { ComponentProps } from 'react'

import { useDropDown } from './Context'

type BodyProps = {
  children: React.ReactElement
} & ComponentProps<'div'>

export function Body({ children }: BodyProps) {
  const { isOpen } = useDropDown()

  return (
    isOpen && (
      <div className="shadow-sm absolute bottom-0 translate-y-[calc(100%_+_8px)] bg-white border border-gray-200 rounded-lg z-30">
        {children}
      </div>
    )
  )
}
