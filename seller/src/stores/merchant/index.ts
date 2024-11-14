import { create } from 'zustand'

import { Merchant, MerchantState } from './merchant-store.type'

export const useMerchantStore = create<MerchantState>()((set) => ({
  merchant: {} as Merchant,
  save: (merchant) => set({ merchant }),
  update: (merchant) =>
    set((state) => ({
      merchant: {
        ...state.merchant,
        ...Object.fromEntries(
          Object.entries(merchant).filter(([, value]) => value !== undefined),
        ),
      },
    })),
}))
