import NextAuth, { AuthOptions } from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'

import { SellerAuthenticate } from '@/api/seller/authenticate'

export const authOption: AuthOptions = {
  providers: [
    CredentialProvider({
      type: 'credentials',
      name: 'Credentials',
      credentials: {
        cnpj: { label: 'cnpj', type: 'text', placeholder: 'cnpj' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.password || !credentials?.cnpj) return null
        const data = await SellerAuthenticate({
          cnpj: credentials.cnpj,
          password: credentials.password,
        })

        if (data)
          return {
            id: data.comerciante.idComerciante.toString(),
            accessToken: data.token.token,
            expiresAt: data.token.expiresAt,
          }

        return null
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30,
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },

    async session({ session, token }) {
      session.user = token
      session.expires = token.expiresAt
      console.log({ session })
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/signin',
    newUser: '/auth/signin',
    verifyRequest: '/auth/signin',
    signOut: '/auth/signin',
  },
}

export const handler = NextAuth(authOption)

export { handler as GET, handler as POST }
