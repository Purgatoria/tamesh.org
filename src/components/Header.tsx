'use client'

import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
import { usePathname } from 'next/navigation'
import { MENU_ITEMS, SITE_CONFIG } from '@/constants'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white shadow-sm backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xl font-bold transition-colors duration-200 hover:text-meshtastic-primary flex items-center gap-2"
        >
          <Image src="meshtastic_powered.png" width={48} height={48} className='mr-3' alt={SITE_CONFIG.name+` logo`} />
          <span>{SITE_CONFIG.name}</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="flex gap-2">
            {MENU_ITEMS.map(({ path, label }) => (
              <Link 
                key={path}
                href={path} 
                className={`px-3 py-2 text-sm font-bold rounded-md ${
                  pathname === path 
                    ? 'text-meshtastic-primary border-2 border-meshtastic-primary'
                    : 'hover:text-meshtastic-primary border border-transparent'
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