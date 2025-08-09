import type { PropsWithChildren } from 'react'
import { useState } from 'react'

type Props = PropsWithChildren<{ content: string }>

export function Tooltip({ content, children }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <span className="tooltip" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {children}
      {open ? <span className="tooltip-content" role="tooltip">{content}</span> : null}
    </span>
  )
}

export default Tooltip


