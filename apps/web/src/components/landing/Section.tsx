import type { PropsWithChildren, ReactNode } from 'react'

type Props = PropsWithChildren<{
  id?: string
  title?: string
  subtitle?: string | ReactNode
}>

export function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="section" aria-labelledby={id ? `${id}-title` : undefined}>
      {title ? (
        <header className="section-header">
          <h2 id={id ? `${id}-title` : undefined}>{title}</h2>
          {subtitle ? <p className="muted">{subtitle}</p> : null}
        </header>
      ) : null}
      <div className="section-content">{children}</div>
    </section>
  )
}

export default Section


