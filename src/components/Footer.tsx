'use client'

import Link from 'next/link'
import { MENU_ITEMS, SITE_CONFIG } from '@/constants'

export default function Footer() {
  return (
    <footer className="bg-white/90 dark:bg-black/90 text-gray-600 dark:text-gray-400 border-t dark:border-gray-800 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="space-y-4">
            <Link href="/" className="text-lg font-bold text-gray-900 dark:text-white hover:text-meshtastic-primary transition-colors">
              {SITE_CONFIG.name}
            </Link>
            <p className="text-sm">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Bağlantılar */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Bağlantılar
            </h3>
            <ul className="space-y-2">
              {MENU_ITEMS.map(({ path, label }) => (
                <li key={path}>
                  <Link href={path} className="hover:text-meshtastic-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Topluluk */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Topluluk
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href={SITE_CONFIG.links.whatsapp}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-meshtastic-primary transition-colors"
                >
                  WhatsApp Grubu
                </a>
              </li>
              <li>
                <a 
                  href={SITE_CONFIG.links.discord}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-meshtastic-primary transition-colors"
                >
                  Discord Sunucusu
                </a>
              </li>
            </ul>
          </div>

          {/* Resmi Meshtastic */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Resmi Meshtastic
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://meshtastic.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-meshtastic-primary transition-colors"
                >
                  Meshtastic.org
                </a>
              </li>
              <li>
                <a 
                  href="https://meshtastic.org/docs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-meshtastic-primary transition-colors"
                >
                  Dokümantasyon
                </a>
              </li>
              <li>
                <a 
                  href="https://meshtastic.org/downloads" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-meshtastic-primary transition-colors"
                >
                  İndirmeler
                </a>
              </li>
              <li>
                <a 
                  href={SITE_CONFIG.links.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-meshtastic-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="mt-8 pt-8 border-t dark:border-gray-800">
          <div className="space-y-4">
            <p className="text-sm text-center">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. Tüm hakları saklıdır.
            </p>
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              {SITE_CONFIG.name}, Meshtastic projesinin resmi bir parçası değildir. 
              Bu platform, Türkiye'deki gönüllü kullanıcılar tarafından oluşturulmuş bağımsız bir topluluk girişimidir. 
              Meshtastic® ilgili tüm hakları kendi sahiplerine aittir.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 