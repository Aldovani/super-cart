import { createContext, useContext, useState } from 'react'

type DrawerContext = {
  isOpen: boolean
  handleClose: () => void
  handleOpen: () => void
}

type DrawerProviderProps = {
  children: React.ReactNode
}
const DrawerContext = createContext({} as DrawerContext)

export function DrawerProvider({ children }: DrawerProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpen() {
    setIsOpen(true)
  }
  function handleClose() {
    setIsOpen(false)
  }

  return (
    <DrawerContext.Provider value={{ isOpen, handleClose, handleOpen }}>
      {children}
    </DrawerContext.Provider>
  )
}
export function useDrawer() {
  const data = useContext(DrawerContext)
  return { ...data }
}
