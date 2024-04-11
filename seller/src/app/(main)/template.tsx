import { AsideBar } from '@/components/UI/AsideBar'
import { Header } from '@/components/UI/Header'

type PortalTemplateProps = {
  children: React.ReactElement
}

export default function PortalTemplate({ children }: PortalTemplateProps) {
  return (
    <div className="w-full h-full grid grid-cols-[250px_1fr] grid-rows-[80px_1fr] ">
      <AsideBar />
      <Header />
      <main>{children}</main>
    </div>
  )
}
