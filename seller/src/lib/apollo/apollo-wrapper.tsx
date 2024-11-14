'use client'

import { ApolloLink } from '@apollo/client'
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr'
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'

export function makeClient() {
  const httpLink = createUploadLink({
    uri: 'http://localhost:7777/graphql',
    credentials: 'include',
    fetchOptions: { cache: 'force-cache', credentials: 'include' },
  })

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    credentials: 'include',

    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  })
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  )
}
