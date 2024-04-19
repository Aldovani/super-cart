import { createContext, useContext, useState } from 'react'

import { DropDownMenu } from '.'

type ContextProviderProps = {
  children: React.ReactNode
}

type DropDownContext = {
  isOpen: boolean
  handleOpen: () => void
  handleClose: () => void
  handleToggle: () => void
}

const DropDownContext = createContext({} as DropDownContext)

export function ContextProvider({ children }: ContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpen() {
    setIsOpen(true)
  }

  function handleToggle() {
    setIsOpen((prev) => !prev)
  }

  function handleClose() {
    setIsOpen(false)
  }

  return (
    <DropDownContext.Provider
      value={{ isOpen, handleOpen, handleClose, handleToggle }}
    >
      <DropDownMenu.Container>{children}</DropDownMenu.Container>
    </DropDownContext.Provider>
  )
}

export function useDropDown() {
  const data = useContext(DropDownContext)
  return data
}
