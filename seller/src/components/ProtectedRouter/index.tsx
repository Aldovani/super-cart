import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

type ProtectedRouterProps = {
  children: React.ReactNode
}
export async function ProtectedRouter({ children }: ProtectedRouterProps) {
  const session = await getServerSession()

  if (!session || !session.user) {
    redirect('/auth/signin')
  }

  return <>{children}</>
}
