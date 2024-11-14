import { useMutation } from '@apollo/client'

import {
  AuthMutation,
  AuthMutationVariables,
} from '@/graphql/generated/graphql'
import { SIGN_IN_MERCHANT } from '@/graphql/queries'

export function Authentication() {
  const [auth, { data, loading, error }] = useMutation<
    AuthMutation,
    AuthMutationVariables
  >(SIGN_IN_MERCHANT)

  return {
    data,
    loading,
    error,
    auth,
  }
}
