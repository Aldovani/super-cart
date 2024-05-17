import { useDrawer } from './Context'

type TriggerProps = {
  children: React.ReactNode
}

export function Trigger({ children }: TriggerProps) {
  const { handleOpen, isOpen, handleClose } = useDrawer()
  return <button onClick={isOpen ? handleClose : handleOpen}>{children}</button>
}
