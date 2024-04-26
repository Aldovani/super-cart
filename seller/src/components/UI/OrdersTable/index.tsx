'use client'

import { Ellipsis } from 'lucide-react'

import { DropDownMenu } from '../DropDownMenu'

import { Status } from './Status'

export function OrdersTable() {
  return (
    <div className="">
      <table className="w-full">
        <thead className=" bg-gray-50  rounded-lg border border-gray-200  w-full">
          <tr className="rounded-3xl">
            <th className="text-left rounded-lg  px-8 font-medium p-4 text-gray-500 uppercase">
              ID
            </th>
            <th className="text-left font-medium text-gray-500 uppercase">
              Cliente
            </th>
            <th className="text-left  font-medium text-gray-500 uppercase">
              valor
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
              <span>125484516165498</span>
            </td>
            <td className="py-6">
              <span className="font-medium text-gray-500">
                Aldovani henrique
              </span>
            </td>

            <td className="py-6">
              <span className="font-medium text-gray-600">R$20,00</span>
            </td>
            <td className="py-6">
              <Status status="finished" />
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
