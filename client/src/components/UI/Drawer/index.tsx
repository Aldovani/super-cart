import { Body } from './Body'
import { DrawerProvider } from './Context'
import { Overlay } from './Overlay'
import { Trigger } from './Trigger'

type DrawerProps = {
  children: React.ReactNode
}

export function Drawer({ children }: DrawerProps) {
  return <DrawerProvider>{children}</DrawerProvider>
}

Drawer.Overlay = Overlay
Drawer.Body = Body
Drawer.Trigger = Trigger
