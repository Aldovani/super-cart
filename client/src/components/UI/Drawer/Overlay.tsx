import { ReactPortal } from '@/components/ReactPortal'

import { useDrawer } from './Context'

type ContainerProps = {
  children: React.ReactNode
}

export function Overlay({ children }: ContainerProps) {
  const { isOpen } = useDrawer()

  if (!isOpen) return null

  return (
    <ReactPortal containerId="drawer-container">
      <div className="w-full h-[calc(100%_-_81px)] top-[81px] bg-black/5 fixed  left-0 z-40"></div>
      <div className="w-2/6 h-[calc(100%_-_81px)] top-[81px]  fixed z-40  right-0 bg-white">
        {children}
      </div>
    </ReactPortal>
  )
}
