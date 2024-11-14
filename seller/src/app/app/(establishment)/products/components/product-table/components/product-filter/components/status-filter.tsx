'use client'
import { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from '@components/ui/radio-group'
import { useSetSearchParams } from '@hooks/use-set-searchParams'
import { BarChart2 } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'

export function StatusFilter() {
  const { handleSetSearchParams, searchParams } = useSetSearchParams()

  const [status, setStatus] = useState(searchParams.get('productStatus') || '')

  function handleChangeStatus(value: string) {
    setStatus(value)
    handleSetSearchParams(['productStatus', value])
  }

  useEffect(() => {
    setStatus(searchParams.get('productStatus') || '')
  }, [searchParams])

  return (
    <Popover>
      <PopoverTrigger className="flex gap-2 items-center text-sm text-gray-400 font-medium leading-6  px-4 py-2 border border-gray-200 rounded-lg">
        <BarChart2 />
        <span>Status</span>{' '}
        {status && (
          <>
            <Separator orientation="vertical" />
            <Badge>{status}</Badge>
          </>
        )}
      </PopoverTrigger>
      <PopoverContent align="start" className="w-60  p-0">
        <form>
          <RadioGroup
            defaultValue={status}
            value={status}
            onValueChange={(value) => {
              handleChangeStatus(value)
            }}
            className="flex flex-col gap-2"
          >
            <label
              htmlFor="available"
              className="flex p-2 hover:bg-gray-50 cursor-pointer items-center gap-2"
            >
              <RadioGroupItem id="available" value="available" />
              <span className="text-slate-400 text-sm">Disponível</span>
            </label>
            <label
              htmlFor="preparation"
              className="flex  p-2 items-center gap-2 hover:bg-gray-50 cursor-pointer"
            >
              <RadioGroupItem id="preparation" value="preparation" />
              <span className="text-slate-400 text-sm">Em preparo</span>
            </label>
            <label
              htmlFor="unavailable"
              className="flex  p-2 items-center gap-2 hover:bg-gray-50 cursor-pointer"
            >
              <RadioGroupItem id="unavailable" value="unavailable" />
              <span className="text-slate-400 text-sm">Indisponível</span>
            </label>
          </RadioGroup>
          {!!status && (
            <>
              <Separator />

              <Button
                type="button"
                onClick={() => handleChangeStatus('')}
                variant="ghost"
                className="w-full  rounded-t-none text-gray-500"
              >
                Limpar Filtro
              </Button>
            </>
          )}
        </form>
      </PopoverContent>
    </Popover>
  )
}
