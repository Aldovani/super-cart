import { Status } from './Status'

export function ProductsTable() {
  return (
    <div className="w-full border rounded-lg">
      <table className="w-full">
        <thead className="w-full bg-gray-50 ">
          <tr className="bg-gray-50   w-full">
            <th className="font-medium p-4 text-gray-500 uppercase">
              Produtos
            </th>
            <th className="font-medium text-gray-500 uppercase">Valor</th>
            <th className="font-medium text-gray-500 uppercase">Categorias</th>
            <th className="font-medium text-gray-500 uppercase">Status</th>
            <th className="font-medium text-gray-500 uppercase">
              Data de criação
            </th>
            <th className="font-medium text-gray-500 uppercase"></th>
          </tr>
        </thead>
        <tbody>
          <tr className=" border-b">
            <td className="pb-6">
              <span></span>
              <span>Feijão nene</span>
            </td>
            <td className="pb-6">
              <span>R$20,00</span>
            </td>
            <td className="pb-6">
              <span>Grãos</span>
            </td>
            <td className="pb-6">
              <Status status="available" />
            </td>
            <td className="pb-6">
              <span>12/04/2024</span>
            </td>
            <td className="pb-6">
              <span>...</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
