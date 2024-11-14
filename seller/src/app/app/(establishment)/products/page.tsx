import dynamicImport from 'next/dynamic'

import { OpenCreateProduct } from './components/create-product/components/open-create-product'
import { ProductTable } from './components/product-table'
import { ProductListPageProps } from './products.type'

const EditProductSheet = dynamicImport(
  () => import('./components/edit-product'),
  {
    loading: () => <p>Loading</p>,
  },
)

const DeleteProductAlertDialog = dynamicImport(
  () => import('./components/delete-product'),
  {
    loading: () => <p>Loading</p>,
  },
)
const CreateProductSheet = dynamicImport(
  () => import('./components/create-product'),
  {
    loading: () => <p>Loading</p>,
  },
)

export const revalidate = 0

export default async function ProductListPage({
  searchParams,
}: ProductListPageProps) {
  const isShowEditProductForm = !!searchParams['modal-edit']
  const isShowDeleteAlertDialog = !!searchParams['alert-delete']
  const isShowCreateProductSheet = !!searchParams['create-product']

  return (
    <>
      <header className="px-8  mt-10 ">
        <div className="border-b pb-6 border-gray-200 flex justify-between  items-center   ">
          <div>
            <h2 className="text-gray-800 font-medium text-[2rem]">Produtos</h2>
            <p className="text-gray-400 ">
              Confira todos os produtos registrado no seu marktplace
            </p>
          </div>
          <OpenCreateProduct />
        </div>
      </header>

      <main className="px-8 pb-10 mt-8 flex flex-col gap-4">
        <ProductTable searchParams={searchParams} />
      </main>

      {isShowDeleteAlertDialog && <DeleteProductAlertDialog />}

      {isShowEditProductForm && <EditProductSheet />}

      {isShowCreateProductSheet && <CreateProductSheet />}
    </>
  )
}
