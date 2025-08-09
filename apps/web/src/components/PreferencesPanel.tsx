import { useEffect, useState } from 'react'

export function PreferencesPanel() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => (document.documentElement.dataset.theme as any) || 'light')
  const [fontFamily, setFontFamily] = useState<'sans' | 'serif'>(() => (document.documentElement.dataset.fontFamily === 'serif' ? 'serif' : 'sans'))
  const [scale, setScale] = useState<'90' | '100' | '110' | '120'>(() => (document.documentElement.dataset.fontScale as any) || '100')
  const [reduced, setReduced] = useState<boolean>(window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.dataset.fontFamily = fontFamily
    document.documentElement.dataset.fontScale = scale
    localStorage.setItem('prefs', JSON.stringify({ theme, fontFamily, scale }))
  }, [theme, fontFamily, scale])

  useEffect(() => {
    const saved = localStorage.getItem('prefs')
    if (saved) {
      const p = JSON.parse(saved)
      setTheme(p.theme)
      setFontFamily(p.fontFamily)
      setScale(p.scale)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [])

  return (
    <div>
      <button className="btn" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="prefs-popover">
        Preferencias
      </button>
      {open ? (
        <div id="prefs-popover" className="popover" role="dialog" aria-label="Preferencias de interfaz">
          <div className="row">
            <span>Tema</span>
            <select className="select" value={theme} onChange={(e) => setTheme(e.target.value as any)}>
              <option value="light">Claro</option>
              <option value="dark">Oscuro</option>
            </select>
          </div>
          <div className="row">
            <span>Fuente</span>
            <select className="select" value={fontFamily} onChange={(e) => setFontFamily(e.target.value as any)}>
              <option value="sans">Sans</option>
              <option value="serif">Serif</option>
            </select>
          </div>
          <div className="row">
            <span>Escala</span>
            <select className="select" value={scale} onChange={(e) => setScale(e.target.value as any)}>
              <option value="90">90%</option>
              <option value="100">100%</option>
              <option value="110">110%</option>
              <option value="120">120%</option>
            </select>
          </div>
          <div className="row">
            <span>Movimiento</span>
            <label>
              <input type="checkbox" checked={reduced} onChange={() => setReduced((v) => !v)} /> Reducir
            </label>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default PreferencesPanel



