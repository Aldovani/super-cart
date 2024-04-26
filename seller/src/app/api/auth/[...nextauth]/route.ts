import NextAuth, { AuthOptions } from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'

import {
  SellerAuthenticate,
  SellerAuthenticateResponseBody,
} from '@/api/seller/authenticate'

const authOption: AuthOptions = {
  providers: [
    CredentialProvider({
      type: 'credentials',
      name: 'Credentials',
      credentials: {
        cnpj: { label: 'cnpj', type: 'text', placeholder: 'cnpj' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.password || !credentials?.cnpj) return

        const seller = await SellerAuthenticate({
          cnpj: credentials.cnpj,
          password: credentials.password,
        })
        if (!seller?.ok) return null

        const { seller: sellerToJson } =
          (await seller.json()) as SellerAuthenticateResponseBody

        if (sellerToJson)
          return {
            id: sellerToJson.idComerciante,
            email: sellerToJson.email,
            image: sellerToJson.bannerUrl,
            name: sellerToJson.razaoSocial,
          }

        return null
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    jwt({ token, user }) {
      return { ...token, ...user }
    },
    session({ session, token }) {
      return { ...session, ...token }
    },
  },
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }
