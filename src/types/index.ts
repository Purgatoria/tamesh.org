export type MenuItem = {
  path: string
  label: string
}

export type SocialLink = {
  name: string
  url: string
  icon: React.ComponentType<{ className?: string }>
} 