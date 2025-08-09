import type { PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'

type Props = PropsWithChildren<{
  section: 'sme' | 'investors'
  title: string
  breadcrumbs?: string
}>

export function DashboardLayout({ section, title, children, breadcrumbs }: Props) {
  const links = section === 'sme'
    ? [
        { to: '/sme', label: 'Facturas' },
        { to: '/sme/upload', label: 'Subir factura' },
      ]
    : [
        { to: '/investors', label: 'Marketplace' },
      ]

  return (
    <div className="dash">
      <aside className="sidebar">
        <nav aria-label="Secciones">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'side-link active' : 'side-link')}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <section>
        {breadcrumbs ? <div className="breadcrumbs">{breadcrumbs}</div> : null}
        <h2 style={{ marginTop: 0 }}>{title}</h2>
        <div className="side-inline" aria-hidden />
        {children}
      </section>
    </div>
  )
}

export default DashboardLayout



