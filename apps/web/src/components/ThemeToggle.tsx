import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => (document.documentElement.classList.contains('dark') ? 'dark' : 'light'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (saved) setTheme(saved)
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark')
  }, [])

  return (
    <button className="btn" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="Cambiar tema">
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  )
}

export default ThemeToggle


