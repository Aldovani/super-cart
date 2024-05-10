import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/lib/queryClient'

type TasnstackProviderProps = {
  children: React.ReactNode
}

export function TasnstackProvider({ children }: TasnstackProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
