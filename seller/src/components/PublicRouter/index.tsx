import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

type PublicRouterProps = {
  children: React.ReactNode
}

export async function PublicRouter({ children }: PublicRouterProps) {
  const session = await getServerSession()

  if (session) {
    return redirect('/app/dashboard')
  }

  return <>{children}</>
}
