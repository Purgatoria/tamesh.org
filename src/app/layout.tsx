import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientLayout from '../components/ClientLayout'
import Footer from '../components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Meshtastic Türkiye',
  description: 'Meshtastic Türkiye Topluluğu resmi web sitesi',
  metadataBase: new URL('https://meshtastic.org.tr'),
  openGraph: {
    title: 'Meshtastic Türkiye',
    description: 'Kablosuz Mesh Ağları ile İnternet Olmadan da Haberleşin',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meshtastic Türkiye',
    description: 'Kablosuz Mesh Ağları ile İnternet Olmadan da Haberleşin',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <ClientLayout>
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  )
} 