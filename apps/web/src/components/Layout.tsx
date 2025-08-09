import type { PropsWithChildren } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import ThemeToggle from '@/components/ThemeToggle'
import PreferencesPanel from '@/components/PreferencesPanel'
import { ToastContainer } from '@/components/ui/Toast'
import { useState } from 'react'

export function Layout({ children }: PropsWithChildren) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div>
      <a href="#main" className="visually-hidden-focusable">
        Saltar al contenido
      </a>
      <motion.header
        role="banner"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="backdrop-blur bg-white/80 dark:bg-slate-950/40 border-b border-slate-200/60 dark:border-slate-800/60"
        style={{ position: 'sticky', top: 0, zIndex: 10 }}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-screen-2xl w-full" style={{ paddingTop: 8, paddingBottom: 8, position: 'relative' }}>
          <nav aria-label="Principal" className="nav justify-between w-full items-center">
            <Link to="/" aria-label="Inicio Credital" style={{ fontWeight: 800, fontSize: 18 }}>
              Credital
            </Link>
            <div className="flex items-center gap-2">
              <button className="btn mobile-toggle" aria-label="Abrir menú" onClick={() => setMenuOpen((v) => !v)}>
                ☰
              </button>
              <div className="nav-links hidden md:flex" data-open={menuOpen}>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'tab active' : 'tab')}>
                  Inicio
                </NavLink>
                <NavLink to="/sme" className={({ isActive }) => (isActive ? 'tab active' : 'tab')}>
                  PYMES
                </NavLink>
                <NavLink to="/investors" className={({ isActive }) => (isActive ? 'tab active' : 'tab')}>
                  Inversionistas
                </NavLink>
                <a href="#contacto" className="tab" aria-label="Ir a contacto">
                  Contacto
                </a>
              </div>
              <PreferencesPanel />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </motion.header>
      <main id="main" className="container mx-auto px-4 md:px-6 max-w-screen-2xl w-full" role="main" style={{ maxWidth: '100%' }}>
        {children}
      </main>
      <footer id="contacto" className="container mx-auto px-4 md:px-6 max-w-screen-2xl w-full" style={{ color: '#475569', paddingTop: 24, paddingBottom: 48 }}>
        © {new Date().getFullYear()} Credital · contacto@credital.mx
      </footer>
      <ToastContainer />
    </div>
  )
}


