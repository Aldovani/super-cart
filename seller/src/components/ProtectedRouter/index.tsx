type ProtectedRouterProps = {
  children: React.ReactNode
}
export async function ProtectedRouter({ children }: ProtectedRouterProps) {
  // if (!session || !session.user) {
  //   // redirect('/auth/signin')
  // }

  return <>{children}</>
}
