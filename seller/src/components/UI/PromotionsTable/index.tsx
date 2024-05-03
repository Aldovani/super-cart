'use client'

import { Ellipsis } from 'lucide-react'

import { DropDownMenu } from '../DropDownMenu'

export function PromotionsTable() {
  return (
    <div className="">
      <table className="w-full">
        <thead className=" bg-gray-50  rounded-lg border border-gray-200  w-full">
          <tr className="rounded-3xl">
            <th className="text-left rounded-lg  px-8 font-medium p-4 text-gray-500 uppercase">
              Produto
            </th>
            <th className="text-left font-medium text-gray-500 uppercase">
              Valor
            </th>
            <th className="text-left  font-medium text-gray-500 uppercase">
              Desconto
            </th>
            <th className="text-left  font-medium text-gray-500 uppercase">
              Promo
            </th>
            <th className="text-left  font-medium text-gray-500 uppercase">
              Data de inicio
            </th>
            <th className="text-left  font-medium text-gray-500 uppercase">
              Data de final
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
              <span className="font-medium text-gray-500">50%</span>
            </td>
            <td className="py-6">
              <span className="font-medium text-gray-500">R$10,00</span>
            </td>
            <td className="py-6">
              <span className="font-medium text-gray-600">12/04/2024</span>
            </td>
            <td className="py-6">
              <span className="font-medium text-gray-600">12/04/2024</span>
            </td>
            <td className="py-6">
              <DropDownMenu.Context>
                <DropDownMenu.Trigger>
                  <Ellipsis />
                </DropDownMenu.Trigger>
                <DropDownMenu.Body>
                  <p>sds</p>
                </DropDownMenu.Body>
              </DropDownMenu.Context>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
