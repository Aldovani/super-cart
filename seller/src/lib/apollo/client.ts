import { ApolloClient, InMemoryCache } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'

const GRAPHQL_ENDPOINT = 'http://localhost:7777/graphql'

export const { getClient } = registerApolloClient(() => {
  const httpLink = createUploadLink({
    uri: GRAPHQL_ENDPOINT,
    credentials: 'include',
    fetchOptions: { cache: 'no-store', credentials: 'include' },
  })

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    credentials: 'include',
  })
})
