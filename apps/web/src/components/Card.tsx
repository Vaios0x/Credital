import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  title?: string
  description?: string
  onClick?: () => void
  as?: 'div' | 'button'
  className?: string
}>

export function Card({ title, description, children, onClick, as = 'div', className = '' }: Props) {
  const Comp: any = as
  return (
    <Comp
      className={[
        'card p-4 md:p-5 transition-all duration-150 hover:shadow-md will-change-transform',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={onClick}
      {...(as === 'button' ? { type: 'button' } : {})}
    >
      {title ? <h3 className="mt-0 mb-1 text-lg font-semibold">{title}</h3> : null}
      {description ? <p className="mt-0 mb-3 text-slate-600 dark:text-slate-300">{description}</p> : null}
      {children}
    </Comp>
  )
}


