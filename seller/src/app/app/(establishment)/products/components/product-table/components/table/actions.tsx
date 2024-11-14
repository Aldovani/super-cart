import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useSetSearchParams } from '@/hooks/use-set-searchParams'

type ActionsProps = {
  productId: string
}

export function Actions({ productId }: ActionsProps) {
  const { handleSetSearchParams } = useSetSearchParams()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-8 w-8 p-0">
          <span className="sr-only">Abrar o menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Ações</DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            handleSetSearchParams(
              ['modal-edit', 'true'],
              ['productId', productId],
            )
          }}
        >
          Editar produto
        </DropdownMenuItem>
        <DropdownMenuItem>Mais detalhes</DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            handleSetSearchParams(
              ['alert-delete', 'true'],
              ['productId', productId],
            )
          }}
        >
          Deletar produto
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
