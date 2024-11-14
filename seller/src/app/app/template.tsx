import { Header } from './components/header'
import { Sidebar } from './components/sidebar'

type PortalTemplateProps = {
  children: React.ReactElement
}

export default async function PortalTemplate({
  children,
}: PortalTemplateProps) {
  return (
    <div className="w-full h-full grid grid-cols-[250px_1fr] grid-rows-[80px_1fr] ">
      <Header />
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}
