'use client'

import { useEffect, useState } from 'react'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('darkMode')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    document.documentElement.classList.toggle('dark', 
      storedTheme ? storedTheme === 'true' : prefersDark
    )
    
    setMounted(true)
  }, [])

  return (
    <div className="relative min-h-screen">
      <div className="relative min-h-screen bg-white dark:bg-gray-900">
        {mounted ? children : null}
      </div>
    </div>
  )
} 