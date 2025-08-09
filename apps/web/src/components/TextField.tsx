import type { InputHTMLAttributes } from 'react'

type Props = {
  label: string
  id: string
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export function TextField({ label, id, error, ...props }: Props) {
  return (
    <div style={{ display: 'grid', gap: 6 }}>
      <label htmlFor={id} style={{ fontWeight: 600 }}>
        {label}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="appearance-none accent-sky-500 caret-sky-600 outline-none focus:outline-2 focus:outline-sky-400 field-sizing-content"
        style={{
          padding: '10px 12px',
          borderRadius: 6,
          border: '1px solid #e2e8f0',
        }}
        {...props}
      />
      {error ? (
        <span id={`${id}-error`} role="alert" style={{ color: '#ef4444', fontSize: 12 }}>
          {error}
        </span>
      ) : null}
    </div>
  )
}


