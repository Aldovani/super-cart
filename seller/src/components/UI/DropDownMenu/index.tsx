import { Body } from './Body'
import { Container } from './container'
import { ContextProvider } from './Context'
import { Trigger } from './Trigger'

type DropDownMenuProps = {
  children: React.ReactNode
}

export function DropDownMenu({ children }: DropDownMenuProps) {
  return <ContextProvider>{children}</ContextProvider>
}

DropDownMenu.Body = Body
DropDownMenu.Container = Container
DropDownMenu.Trigger = Trigger
