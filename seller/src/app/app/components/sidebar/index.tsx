import { SidebarHeader } from './components/header'
import { SidebarNavigation } from './components/navigation'

export function Sidebar() {
  return (
    <aside className="relative col-start-1 col-end-2 row-start-1 row-end-3 ">
      <div className="fixed  max-w-fit inset-0  top-0 pt-6 border-r  border-gray-200 h-full  overflow-y-auto   ">
        <SidebarHeader />
        <SidebarNavigation />
      </div>
    </aside>
  )
}
