import './globals.css'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
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

// Header'ı dinamik olarak yükle
const Header = dynamic(() => import('@/components/Header'), {
  ssr: true,
  loading: () => (
    <div className="h-16 bg-gray-900 dark:bg-black animate-pulse" />
  )
})

export const metadata: Metadata = {
  title: 'Meshtastic Türkiye',
  description: 'Meshtastic Türkiye Topluluğu resmi web sitesi',
  metadataBase: new URL('https://tamesh.org'),
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
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${inter.className} antialiased`}>
        <Header /> 
        <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
      </body>
    </html>
  )
} 