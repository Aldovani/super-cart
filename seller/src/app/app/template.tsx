import { getServerSession } from 'next-auth'

import { AsideBar } from '@/components/UI/AsideBar'
import { Header } from '@/components/UI/Header'

import { authOption } from '../api/auth/[...nextauth]/route'

type PortalTemplateProps = {
  children: React.ReactElement
}

export default async function PortalTemplate({
  children,
}: PortalTemplateProps) {
  await getServerSession(authOption)
  return (
    <div className="w-full h-full grid grid-cols-[250px_1fr] grid-rows-[80px_1fr] ">
      <AsideBar />
      <Header />
      <main>{children}</main>
    </div>
  )
}
