'use client'

import { createContext, useContext } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

type modalContext = {
  open: () => void
  close: () => void
  isOpen: boolean
}

type ModalContextProvider = {
  modalName: string
  children: React.ReactNode
}

const ModalContext = createContext({} as modalContext)

export function ModalContextProvider({
  modalName,
  children,
}: ModalContextProvider) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const isOpen = searchParams.get('modal-name') === modalName

  function close() {
    router.back()
  }

  function open() {
    router.push(`?modal-name=${modalName}`)
  }

  return (
    <ModalContext.Provider
      value={{
        close,
        isOpen,
        open,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const data = useContext(ModalContext)

  return { ...data }
}
