'use client'

import { useEffect, useState } from 'react'
import { Banknote } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DualRangeSlider } from '@/components/ui/dual-range-slider'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { useSetSearchParams } from '@/hooks/use-set-searchParams'

export function CostFilter() {
  const { handleSetSearchParams, searchParams } = useSetSearchParams()

  const [costPrice, setCostPrice] = useState(() =>
    JSON.parse(searchParams.get('costPrice') || '[0, 1000]'),
  )

  useEffect(() => {
    setCostPrice(JSON.parse(searchParams.get('costPrice') || '[0, 1000]'))
  }, [searchParams])

  function handleSetCostPrice(value: number[]) {
    setCostPrice(value)

    value[0] === 0 && value[1] === 1000
      ? handleSetSearchParams(['costPrice', ''])
      : handleSetSearchParams(['costPrice', JSON.stringify(value)])
  }

  return (
    <Popover>
      <PopoverTrigger className="flex gap-2 items-center text-sm text-gray-400 font-medium leading-6 px-4 py-2 border border-gray-200 rounded-lg">
        {costPrice[0] === 0 && costPrice[1] === 1000 && (
          <>
            <Banknote />
            <span>Preço</span>
          </>
        )}
        {(costPrice[0] !== 0 || costPrice[1] !== 1000) && (
          <>
            <Banknote />
            <span>Preço</span>
            <Separator orientation="vertical" />
            <div className="flex gap-1">
              <Badge>R$ {costPrice[0]}</Badge>
              <span>-</span>
              <Badge>R$ {costPrice[1]}</Badge>
            </div>
          </>
        )}
      </PopoverTrigger>
      <PopoverContent align="start" className="p-0">
        <div className="px-4 pt-8 pb-4">
          <DualRangeSlider
            label={(value) => <span>R${value}</span>}
            max={1000}
            step={1}
            value={costPrice}
            onValueChange={handleSetCostPrice}
          />
        </div>

        {(costPrice[0] !== 0 || costPrice[1] !== 1000) && (
          <>
            <Separator />
            <Button
              variant="ghost"
              className="text-gray-500 w-full"
              onClick={() => {
                handleSetCostPrice([0, 1000])
              }}
            >
              Remover filtro
            </Button>
          </>
        )}
      </PopoverContent>
    </Popover>
  )
}
