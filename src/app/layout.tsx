import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Machan Travels | Premium Sri Lanka Tours from the UK',
  description: 'Discover the Pearl of the Indian Ocean with Machan Travels. Premium bespoke tours to Sri Lanka for discerning UK travellers.',
  keywords: ['Sri Lanka tours', 'UK travel', 'luxury holidays', 'Ceylon tourism', 'bespoke travel'],
  authors: [{ name: 'Machan Travels' }],
  openGraph: {
    title: 'Machan Travels - Premium Sri Lanka Tours',
    description: 'Bespoke luxury tours to Sri Lanka for UK travellers',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
