'use client'

import { ColumnDef } from '@tanstack/react-table'
import { ArrowDownUp, ArrowUpDown } from 'lucide-react'
import Image from 'next/image'

import { Status } from '../../Status'

import { Actions } from './actions'
import { Category } from './Category'

export type Products = {
  id: string
  name: string
  imgUrl: string
  categories: string[]
  costPrice: number
  unit: string
  salesPrice: number
  status: 'unavailable' | 'available' | 'preparation'
  createdAt: Date
}

export const columns: ColumnDef<Products>[] = [
  {
    accessorKey: 'name',
    header: () => <div className="">Produto</div>,
    cell: ({ row }) => (
      <div className="flex gap-4 items-center">
        <Image alt="" src={row.original.imgUrl} width={64} height={64} />
        <span className="font-medium text-gray-600">
          {row.original.name}
        </span>{' '}
      </div>
    ),
  },
  {
    accessorKey: 'unit',
    header: () => <div className="">Unidade</div>,
    cell: ({ row }) => (
      <span className="font-medium text-gray-600">{row.original.unit}</span>
    ),
  },
  {
    accessorKey: 'costPrice',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-1 items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {column.getIsSorted() === 'asc' && (
            <ArrowUpDown className=" h-4 w-4" />
          )}
          {column.getIsSorted() === 'desc' && (
            <ArrowDownUp className=" h-4 w-4" />
          )}
          Preço de custo
        </button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('costPrice'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

      return <div className=" font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: 'salesPrice',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-1 items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {column.getIsSorted() === 'asc' && (
            <ArrowUpDown className=" h-4 w-4" />
          )}
          {column.getIsSorted() === 'desc' && (
            <ArrowDownUp className=" h-4 w-4" />
          )}
          Preço de venda
        </button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('salesPrice'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

      return <div className=" font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: 'categories',
    header: 'Categorias',
    cell: ({ row }) => {
      const categories = row.original.categories
      return (
        <div className="flex gap-2">
          {categories.map((category, index) => (
            <Category key={`${category}-${index}`}> {category}</Category>
          ))}
        </div>
      )
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <Status status={row.getValue('status')} />,
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-1 items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {column.getIsSorted() === 'asc' && (
            <ArrowUpDown className=" h-4 w-4" />
          )}
          {column.getIsSorted() === 'desc' && (
            <ArrowDownUp className=" h-4 w-4" />
          )}
          Data de criação
        </button>
      )
    },
    cell: ({ row }) => {
      const createdAt = new Date(row.getValue('createdAt'))
      const formatted = new Intl.DateTimeFormat('pt-br', {
        dateStyle: 'short',
      }).format(createdAt)

      return <div className="">{formatted}</div>
    },
  },
  {
    accessorKey: 'actions',
    header: '',
    cell: ({ row }) => {
      const { id } = row.original

      return <Actions productId={id} />
    },
  },
]
