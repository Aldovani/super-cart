import { Link } from '@/components/UI/Link'
import { StorageFilter } from '@/components/UI/StorageFilter'
import { StorageTable } from '@/components/UI/StorageTable'

export default function StoragePage() {
  return (
    <div className="">
      <header className="px-8  mt-10 ">
        <div className="border-b pb-6 border-gray-200 flex justify-between  items-center   ">
          <div>
            <h2 className="text-gray-800 font-medium text-[2rem]">Estoque</h2>
            <p className="text-gray-400 ">
              Confira todos os produtos registrado no seu marktplace
            </p>
          </div>
          <Link
            className="w-fit px-8 "
            href="/dashboard/products/create"
            passHref
          >
            Adicionar estoque
          </Link>
        </div>
      </header>

      <section className="px-8 mt-8 flex flex-col gap-4">
        <StorageFilter />
        <StorageTable />
      </section>
    </div>
  )
}
