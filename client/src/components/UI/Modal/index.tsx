'use client'
import { Action } from './Action'
import { Body } from './Body'
import { Container } from './Container'
import { ModalContextProvider } from './Context'
import { Footer } from './Footer'
import { Header } from './Header'
import { Trigger } from './Trigger'

type ModalProps = {
  name: string
  children: React.ReactNode
}

export function Modal({ name, children }: ModalProps) {
  return (
    <ModalContextProvider modalName={name}>{children}</ModalContextProvider>
  )
}

Modal.Trigger = Trigger
Modal.Container = Container
Modal.Footer = Footer
Modal.Header = Header
Modal.Body = Body
Modal.Action = Action
