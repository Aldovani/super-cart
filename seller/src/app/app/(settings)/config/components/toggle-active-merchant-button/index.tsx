'use client'

import { Button } from '@/components/ui/button'

import { useToggleActiveMerchantButtonModel } from './toggle-active-merchant-button.model'

export function ToggleActiveMerchantButton() {
  const { handleToggleActiveMerchant, loading, merchantIsActive } =
    useToggleActiveMerchantButtonModel()
  return (
    <div className="flex items-center justify-between mt-8">
      <div className="max-w-[420px]">
        <h4 className="text-gray-600">Desativar estabelecimento</h4>
        <p className="text-gray-400 text-sm mt-2 mb-6">
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
      <Button
        disabled={loading}
        variant="outline"
        data-is-active={!merchantIsActive}
        onClick={() => handleToggleActiveMerchant(merchantIsActive)}
        className="data-[is-active=false]:text-red-500 data-[is-active=false]:hover:bg-red-500 data-[is-active=false]:hover:text-white data-[is-active=false]:hover:border-red-500 text-emerald-600 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 "
      >
        {!merchantIsActive
          ? 'Ativar estabelecimento'
          : 'Desativar estabelecimento'}
      </Button>
    </div>
  )
}
