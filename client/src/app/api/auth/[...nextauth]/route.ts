// import NextAuth, { AuthOptions } from 'next-auth'
// import CredentialProvider from 'next-auth/providers/credentials'

// export const authOption: AuthOptions = {
//   providers: [
//     CredentialProvider({
//       type: 'credentials',
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'email', type: 'text', placeholder: 'email' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials) {
//         try {
//           if (!credentials?.password || !credentials?.email) return null

//           // const response = await sellerAuth.sign({
//           //   cnpj: credentials.cnpj,
//           //   password: credentials.password,
//           // })

//           const { usuario, token } = response.data

//           return {
//             email: usuario.email,
//             name: usuario.nome,
//             id: usuario.idComerciante.toString(),
//             accessToken: token.token,
//             expiresAt: token.expiresAt,
//           }
//         } catch (err) {
//           return null
//         }
//       },
//     }),
//   ],
//   session: {
//     strategy: 'jwt',
//     maxAge: 60 * 60 * 24 * 30,
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       return { ...token, ...user }
//     },

//     async session({ session, token }) {
//       session.user = token
//       session.expires = token.expiresAt
//       return session
//     },
//   },
//   pages: {
//     signIn: '/auth/signin',
//     error: '/auth/signin',
//     newUser: '/auth/signin',
//     verifyRequest: '/auth/signin',
//     signOut: '/auth/signin',
//   },
// }

// export const handler = NextAuth(authOption)

// export { handler as GET, handler as POST }
