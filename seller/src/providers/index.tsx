'use client'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

import { TasnstackProvider } from './tanstackProvider'

type ProvidersProps = {
  children: React.ReactNode
  session?: Session | null
}

export function Providers({ children, session }: ProvidersProps) {
  return (
    <TasnstackProvider>
      <SessionProvider session={session}>{children}</SessionProvider>
    </TasnstackProvider>
  )
}
