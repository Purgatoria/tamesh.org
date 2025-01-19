import { useState, useEffect } from 'react'

export function useTheme() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('darkMode', (!isDark).toString())
    setIsDark(!isDark)
  }

  return { isDark, mounted, toggleTheme }
} 