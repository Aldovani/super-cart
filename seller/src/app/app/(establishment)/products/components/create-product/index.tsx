'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { useModalControl } from '@/hooks/use-modal-control'

import { CreateProductForm } from './components/create-product-form'

export default function CreateProduct() {
  const { handleCloseOnAnimationEnd, handleToggle, isOpen } = useModalControl({
    searchParamsName: 'create-product',
    animationNameOnEnd: 'exit',
  })

  return (
    <Sheet open={isOpen} onOpenChange={handleToggle}>
      <SheetContent
        onAnimationEnd={handleCloseOnAnimationEnd}
        className="!max-w-[580px] "
      >
        <SheetHeader>
          <SheetTitle>Crie um novo produto</SheetTitle>
          <SheetDescription>
            Adicione um novo produto no seu catalogo
          </SheetDescription>
        </SheetHeader>

        <CreateProductForm onClose={handleToggle} />
      </SheetContent>
    </Sheet>
  )
}
