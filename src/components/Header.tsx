'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { usePathname } from 'next/navigation'
import { MENU_ITEMS, SITE_CONFIG } from '@/constants'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-black/90 border-b dark:border-none text-gray-900 dark:text-white shadow-sm backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xl font-bold transition-colors duration-200 hover:text-meshtastic-primary flex items-center gap-2"
        >
          <svg 
            className="h-6 w-6" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span>{SITE_CONFIG.name}</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="flex gap-2">
            {MENU_ITEMS.map(({ path, label }) => (
              <Link 
                key={path}
                href={path} 
                className={`px-3 py-2 rounded-md transition-all duration-200 ${
                  pathname === path 
                    ? 'text-meshtastic-primary bg-gray-100 dark:bg-gray-900'
                    : 'hover:text-meshtastic-primary hover:bg-gray-100 dark:hover:bg-gray-900'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
} 