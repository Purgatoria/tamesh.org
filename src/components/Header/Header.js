'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Logo from '@/components/Logo/Logo'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { mainNavigation, SITE_INFO } from '@/constants/navigation';

export default function Header() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const isActivePage = (path) => pathname === path

    // Tema değiştirme butonu için render fonksiyonu
    const renderThemeChanger = () => {
        if (!mounted) return null

        return (
            <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-gray-100 dark:bg-dark-100 hover:bg-gray-200 dark:hover:bg-dark-50 transition-colors"
                aria-label={theme === 'dark' ? 'Açık temaya geç' : 'Koyu temaya geç'}
            >
                {theme === 'dark' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-900">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                )}
            </button>
        )
    }

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-dark-200 border-b border-gray-200 dark:border-dark-50 shadow-sm backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                        <Logo className="w-10 h-10" />
                        <span className="font-semibold text-gray-900 dark:text-white hidden sm:block">
                            {SITE_INFO.title}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-4">
                        <nav className="flex items-center gap-1">
                            {mainNavigation.map((item, idx) => (
                                <Link
                                    key={item.href + '-' + idx}
                                    href={item.href}
                                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                        isActivePage(item.href)
                                            ? 'bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-500'
                                            : 'text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-500'
                                    }`}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </nav>

                        {/* Theme Toggle Desktop */}
                        {renderThemeChanger()}
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden flex items-center gap-2">
                        {/* Theme Toggle Mobile */}
                        {renderThemeChanger()}

                        <button
                            className="p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="sr-only">Menüyü aç</span>
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-2 space-y-1">
                        {mainNavigation.map((item, idx) => (
                            <Link
                                key={item.href + '-' + idx}
                                href={item.href}
                                className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                                    isActivePage(item.href)
                                        ? 'bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-500'
                                        : 'text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-500'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </header>
    )
} 