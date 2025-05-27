'use client'

import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { ThemeProvider } from '@/components/Theme/ThemeProvider';
import PageTransition from '@/components/Layout/PageTransition';
import { SITE_INFO } from '@/constants/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
    return (
        <html lang="tr" suppressHydrationWarning>
            <head>
                <title>{SITE_INFO.title}</title>
                <meta name="description" content={SITE_INFO.description} />
                
                {/* Google Tag Manager */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-DT62H6PKGB"
                    strategy="afterInteractive"
                />
                <Script id="gtag-init" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-DT62H6PKGB');
                    `}
                </Script>
            </head>
            <body className={inter.className}>
                <ThemeProvider>
                    <div className="flex flex-col min-h-screen bg-white dark:bg-dark-200 transition-colors">
                        <Header />
                        <PageTransition>
                            {children}
                        </PageTransition>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
