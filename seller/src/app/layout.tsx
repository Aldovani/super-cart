import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ViewTransitions } from 'next-view-transitions'

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={poppins.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ViewTransitions>
  )
}
