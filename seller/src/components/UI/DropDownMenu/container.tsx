'use client'
import { ComponentProps, useCallback, useEffect, useRef } from 'react'

import { useDropDown } from './Context'

type ContainerProps = {
  children: React.ReactNode
} & ComponentProps<'div'>

export function Container({ children, ...props }: ContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { handleClose } = useDropDown()

  const onClickOutsideDropDownMenu = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current) return
      const target = e.target as HTMLElement

      if (!containerRef.current.contains(target)) handleClose()
    },
    [handleClose],
  )

  useEffect(() => {
    if (!containerRef) return

    document.addEventListener('click', onClickOutsideDropDownMenu)

    return () =>
      document.removeEventListener('click', onClickOutsideDropDownMenu)
  }, [onClickOutsideDropDownMenu])

  return (
    <div ref={containerRef} {...props} className="relative">
      {children}
    </div>
  )
}
