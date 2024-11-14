'use client'

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

import { useDeleteProductModel } from './delete-product.model'

export default function DeleteProductAlertDialog() {
  const {
    handleCloseOnAnimationEnd,
    handleDeleteProduct,
    handleToggle,
    isOpen,
  } = useDeleteProductModel()

  return (
    <AlertDialog open={isOpen} onOpenChange={handleToggle}>
      <AlertDialogContent onAnimationEnd={handleCloseOnAnimationEnd}>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Voce tem certeza que deseja deletar?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita. Isso sera permanentemente deletado
            de seu catalogo e removido do nosso servidor.{' '}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <Button onClick={handleDeleteProduct} variant="destructive">
            Confirmar
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
