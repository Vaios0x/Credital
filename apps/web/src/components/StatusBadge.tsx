type Props = {
  status: 'Pending' | 'Financed' | 'Paid'
  className?: string
}

export function StatusBadge({ status, className = '' }: Props) {
  const colorBy = {
    Pending: '#f59e0b',
    Financed: '#0ea5e9',
    Paid: '#16a34a',
  } as const
  return (
    <span
      className={["badge", className].filter(Boolean).join(' ')}
      style={{
        borderColor: colorBy[status],
        color: colorBy[status],
        background: '#fff',
      }}
    >
      {status}
    </span>
  )
}


