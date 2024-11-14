'use client'

import { ApolloWrapper } from '@/lib/apollo/apollo-wrapper'

type ProvidersProps = {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <ApolloWrapper>{children}</ApolloWrapper>
}
