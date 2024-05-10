'use client'

import { MouseEvent } from 'react'

import { ReactPortal } from '@/components/ReactPortal'

import { useModal } from './Context'

type ContainerProps = {
  children: React.ReactNode
}
export function Container({ children }: ContainerProps) {
  const { isOpen, close } = useModal()

  if (!isOpen) return null

  function handleCloseModal(e: MouseEvent<HTMLDivElement>) {
    if (e.currentTarget.id === 'overlay') {
      close()
    }
  }

  return (
    <ReactPortal containerId="modal-container">
      <div
        id="overlay"
        onClick={handleCloseModal}
        className="fixed top-0 left-0 bg-black/20 w-screen h-screen z-50"
      ></div>
      <div className="fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-50">
        {children}
      </div>
    </ReactPortal>
  )
}
