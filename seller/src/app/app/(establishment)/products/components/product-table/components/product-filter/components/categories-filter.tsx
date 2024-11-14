'use client'
import { useEffect, useState } from 'react'
import { CheckIcon, Layers3 } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { useSetSearchParams } from '@/hooks/use-set-searchParams'
import { cn } from '@/lib/utils'

type category = {
  value: string
  label: string
}

type CategoriesFilterProps = {
  categories: category[]
}

export function CategoriesFilter({ categories }: CategoriesFilterProps) {
  const { handleSetSearchParams, searchParams } = useSetSearchParams()
  const [selectedCategories, setSelectedCategories] = useState<category[]>(() =>
    JSON.parse(searchParams.get('categories') || '[]'),
  )

  useEffect(() => {
    if (selectedCategories.length === 0) {
      handleSetSearchParams(['categories', ''])
      return
    }

    const categoriesToJSON = JSON.stringify(selectedCategories)
    handleSetSearchParams(['categories', categoriesToJSON])
  }, [selectedCategories, handleSetSearchParams])

  useEffect(() => {
    setSelectedCategories(JSON.parse(searchParams.get('categories') || '[]'))
  }, [searchParams])

  return (
    <Popover>
      <PopoverTrigger className="flex gap-2 items-center text-sm text-gray-400 font-medium leading-6 px-4 py-2 border border-gray-200 rounded-lg">
        {selectedCategories.length === 0 && (
          <>
            <Layers3 />
            <span>Categorias</span>
          </>
        )}
        {selectedCategories.length >= 1 && selectedCategories.length < 3 && (
          <>
            <Layers3 />
            <span>Categorias</span>

            <Separator orientation="vertical" />

            <div className="flex gap-x-1">
              {selectedCategories.map((category) => (
                <Badge key={category.value}>{category.label}</Badge>
              ))}
            </div>
          </>
        )}
        {selectedCategories.length >= 3 && (
          <>
            <Layers3 />
            <span>Categorias</span>

            <Separator orientation="vertical" />

            <Badge>{selectedCategories.length} selecionada</Badge>
          </>
        )}
      </PopoverTrigger>
      <PopoverContent align="start" className=" p-0">
        <Command>
          <CommandInput placeholder="Procure uma categoria..." />
          <CommandList>
            <CommandEmpty>Categoria não encontrada</CommandEmpty>

            <CommandGroup>
              {categories.map((option) => {
                const isSelected = selectedCategories.find(
                  (item) => item.value === option.value,
                )
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      if (isSelected) {
                        setSelectedCategories((prev) =>
                          prev.filter((item) => item.value !== option.value),
                        )
                      } else {
                        setSelectedCategories((prev) => [
                          ...prev,
                          { value: option.value, label: option.label },
                        ])
                      }
                    }}
                  >
                    <div
                      className={cn(
                        'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                        isSelected
                          ? 'bg-primary text-primary-foreground'
                          : 'opacity-50 [&_svg]:invisible',
                      )}
                    >
                      <CheckIcon className={cn('h-4 w-4')} />
                    </div>

                    <span>{option.label}</span>
                  </CommandItem>
                )
              })}
            </CommandGroup>
            {selectedCategories.length > 0 && (
              <>
                <CommandSeparator />
                <CommandItem
                  className="text-center justify-center py-2"
                  onSelect={() => {
                    setSelectedCategories([])
                  }}
                >
                  Limpar filtro
                </CommandItem>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
