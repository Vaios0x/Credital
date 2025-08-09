import { forwardRef } from 'react'

type Props = {
  children: React.ReactNode
  loading?: boolean
  variant?: 'default' | 'primary'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, loading, disabled, variant = 'default', className = '', ...rest }, ref) => {
    const classes = ['btn', variant === 'primary' ? 'btn-primary' : '', className]
      .filter(Boolean)
      .join(' ')
    return (
      <button ref={ref} className={classes} disabled={disabled || loading} {...rest}>
        {loading ? <span className="spinner" aria-hidden /> : null}
        <span>{children}</span>
      </button>
    )
  }
)

Button.displayName = 'Button'


