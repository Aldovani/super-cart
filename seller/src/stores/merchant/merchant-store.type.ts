export type Merchant = {
  id: string
  corporateName?: string | null
  tradeName?: string | null
  logoUrl?: string | null
  bannerUrl?: string | null
  cnpj: string
  isActive: boolean
  isValidated: boolean
  email: string
  minDeliveryValue?: number | null
  type?: string | null
}

export interface MerchantState {
  merchant: Merchant
  save: (merchant: Merchant) => void
  update: (merchant: Partial<Merchant>) => void
}
