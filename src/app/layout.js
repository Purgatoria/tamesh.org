'use client'

import { Inter } from 'next/font/google';
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
