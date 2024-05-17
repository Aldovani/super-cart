'use client'

import { Drawer } from '../Drawer'

import { ProgressBar } from './ProgressBar'

type CartProps = {
  children: React.ReactNode
}

export function Cart({ children }: CartProps) {
  return (
    <Drawer>
      <Drawer.Trigger>{children}</Drawer.Trigger>
      <Drawer.Overlay>
        <Drawer.Body>
          <ProgressBar />

          <header>
            <div></div>
            <div></div>
          </header>
        </Drawer.Body>
      </Drawer.Overlay>
    </Drawer>
  )
}
