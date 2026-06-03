'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-white dark:bg-dark-200">
            <motion.div 
                className="text-center px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                    Sayfa Bulunamadı
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                    Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
                </p>
                <Link 
                    href="/"
                    className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Ana Sayfaya Dön
                </Link>
            </motion.div>

            {/* Dekoratif Arka Plan */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-25"></div>
            </div>
        </div>
    )
} 