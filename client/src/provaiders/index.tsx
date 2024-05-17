'use client'

import { TasnstackProvider } from './tanstackProvider'

type ProvidersProps = {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <TasnstackProvider>{children}</TasnstackProvider>
}
