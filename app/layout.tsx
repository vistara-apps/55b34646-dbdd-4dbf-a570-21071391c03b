import type { Metadata } from 'next'
import { Providers } from './components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Monad Academy - Master Trading',
  description: 'Master trading with risk-free practice and competitive challenges on Base',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
