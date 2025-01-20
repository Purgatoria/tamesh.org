import { MenuItem, SocialLink } from '@/types'

export const MENU_ITEMS: MenuItem[] = [
  { path: '/', label: 'Ana Sayfa' },
  { path: '/kilavuz', label: 'Kurulum' }
]

export const SITE_CONFIG = {
  name: 'Meshtastic Türkiye',
  description: 'Kablosuz mesh ağları ile alternatif iletişim çözümleri geliştiren gönüllü topluluğu',
  url: 'https://meshtr.org',
  ogImage: '/og-image.png',
  links: {
    whatsapp: 'https://chat.whatsapp.com/BXJ87SlHig3CbV3fQ90WsH',
    discord: 'https://discord.gg/purgatoria',
    github: 'https://github.com/Meshtastic-Turkiye-Toplulugu'
  }
} as const 