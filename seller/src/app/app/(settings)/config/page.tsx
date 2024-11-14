import { Separator } from '@/components/ui/separator'

import { AccountForm } from './components/account-form'
import { ChangePasswordForm } from './components/change-password-form'
import { DeleteMerchantButton } from './components/delete-merchant-button'
import { ToggleActiveMerchantButton } from './components/toggle-active-merchant-button'

export default function ConfigPage() {
  return (
    <>
      <header className="px-8  mt-10 ">
        <div className="border-b pb-6 border-gray-200 flex justify-between  items-center   ">
          <div>
            <h2 className="text-gray-800 font-medium text-[2rem]">
              Configuração
            </h2>
            <p className="text-gray-400 ">
              Confira todos os produtos registrado no seu marktplaca
            </p>
          </div>
        </div>
      </header>

      <div className="p-8 ">
        <AccountForm />

        <div className="w-full h-[1px] bg-gray-200 my-10"></div>

        <ChangePasswordForm />
        <div className="w-full h-[1px] bg-gray-200 my-10"></div>

        <section>
          <h3 className="text-2xl text-rose-600">Zona de perigo</h3>
          <ToggleActiveMerchantButton />
          <Separator />
          <DeleteMerchantButton />
        </section>
      </div>
    </>
  )
}
