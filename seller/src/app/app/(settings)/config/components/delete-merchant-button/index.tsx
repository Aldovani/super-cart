'use client'

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

// import { useDeleteMerchantButtonModel } from './delete-merchant-button.model'

export function DeleteMerchantButton() {
  // const {} = useDeleteMerchantButtonModel()

  return (
    <div className="flex  items-center justify-between mt-10">
      <div className="max-w-[420px]">
        <h4 className="text-gray-600">Deletar estabelecimento</h4>
        <p className="text-gray-400 text-sm mt-2 mb-6">
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="outline"
            className="text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500"
          >
            Deletar estabelecimento
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Voce tem certeza que deseja deletar?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Essa ação não pode ser desfeita. Isso sera permanentemente
              deletado de seu catalogo e removido do nosso servidor.{' '}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <Button variant="destructive">Confirmar</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
