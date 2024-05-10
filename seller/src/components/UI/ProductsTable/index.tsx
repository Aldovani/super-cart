'use client'

import { Ellipsis } from 'lucide-react'

import { DropDownMenu } from '../DropDownMenu'

import { Category } from './Category'
import { Status } from './Status'

export function ProductsTable() {
  return (
    <div className="">
      <table className="w-full">
        <thead className=" bg-gray-50  rounded-lg border border-gray-200  w-full">
          <tr className="rounded-3xl">
            <th className="text-left rounded-lg  px-8 font-medium p-4 text-gray-500 uppercase">
              Produtos
            </th>
            <th className="text-left font-medium text-gray-500 uppercase">
              Valor
            </th>
            <th className="text-left  font-medium text-gray-500 uppercase">
              Categorias
            </th>
            <th className="text-left  font-medium text-gray-500 uppercase">
              Status
            </th>
            <th className="text-left  font-medium text-gray-500 uppercase">
              Data de criação
            </th>
            <th className="text-left  font-medium text-gray-500 uppercase"></th>
          </tr>
        </thead>
        <tbody>
          <tr className=" border-b">
            <td className="pl-8 py-6">
              <div className="flex gap-4 items-center">
                <span className="block size-12 bg-gray-100"></span>
                <span className="font-medium text-gray-600">Feijão nene</span>
              </div>
            </td>
            <td className="py-6">
              <span className="font-medium text-gray-500">R$20,00</span>
            </td>
            <td className="py-6">
              <Category>Grãos</Category>
            </td>
            <td className="py-6">
              <Status status="available" />
            </td>
            <td className="py-6">
              <span className="font-medium text-gray-600">12/04/2024</span>
            </td>
            <td className="py-6">
              <DropDownMenu>
                <DropDownMenu.Trigger>
                  <Ellipsis />
                </DropDownMenu.Trigger>
                <DropDownMenu.Body>
                  <p>sds</p>
                </DropDownMenu.Body>
              </DropDownMenu>
            </td>
          </tr>

          <tr className=" border-b">
            <td className="pl-8 py-6">
              <div className="flex gap-4 items-center">
                <span className="block size-12 bg-gray-100"></span>
                <span className="font-medium text-gray-600">Feijão nene</span>
              </div>
            </td>
            <td className="py-6">
              <span className="font-medium text-gray-500">R$20,00</span>
            </td>
            <td className="py-6">
              <Category>Grãos</Category>
            </td>
            <td className="py-6">
              <Status status="available" />
            </td>
            <td className="py-6">
              <span className="font-medium text-gray-600">12/04/2024</span>
            </td>
            <td className="py-6">
              <Ellipsis />
            </td>
          </tr>

          <tr className=" border-b">
            <td className="pl-8 py-6">
              <div className="flex gap-4 items-center">
                <span className="block size-12 bg-gray-100"></span>
                <span className="font-medium text-gray-600">Feijão nene</span>
              </div>
            </td>
            <td className="py-6">
              <span className="font-medium text-gray-500">R$20,00</span>
            </td>
            <td className="py-6">
              <Category>Grãos</Category>
            </td>
            <td className="py-6">
              <Status status="available" />
            </td>
            <td className="py-6">
              <span className="font-medium text-gray-600">12/04/2024</span>
            </td>
            <td className="py-6">
              <Ellipsis />
            </td>
          </tr>

          <tr className=" border-b">
            <td className="pl-8 py-6">
              <div className="flex gap-4 items-center">
                <span className="block size-12 bg-gray-100"></span>
                <span className="font-medium text-gray-600">Feijão nene</span>
              </div>
            </td>
            <td className="py-6">
              <span className="font-medium text-gray-500">R$20,00</span>
            </td>
            <td className="py-6">
              <Category>Grãos</Category>
            </td>
            <td className="py-6">
              <Status status="available" />
            </td>
            <td className="py-6">
              <span className="font-medium text-gray-600">12/04/2024</span>
            </td>
            <td className="py-6">
              <Ellipsis />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
