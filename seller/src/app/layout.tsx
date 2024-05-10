import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { getServerSession } from 'next-auth'
import { Toaster } from 'sonner'

import { Providers } from '@/providers'

import './globals.css'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Super Cart - parceiros',
  description: 'Uma nova forma de vender seus produtos',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers session={session}>{children}</Providers>
        <Toaster richColors />
      </body>
    </html>
  )
}
