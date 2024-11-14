import { cookies } from 'next/headers'

import { GetMerchantQuery } from '@/graphql/generated/graphql'
import { GET_MERCHANT } from '@/graphql/queries'
import { getClient } from '@/lib/apollo/client'

import { MerchantNotVerified } from './components/merchant-not-verified'

export default async function DashboardPage() {
  const token = cookies().get('super_cart_token')

  const { data } = await getClient().query<GetMerchantQuery>({
    query: GET_MERCHANT,
    context: {
      headers: {
        Cookie: JSON.stringify(['super_cart_token', token?.value]),
      },
    },
  })

  if (!data.me.isValidated) return <MerchantNotVerified />

  return <div></div>
}
