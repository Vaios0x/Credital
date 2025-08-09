import { forwardRef } from 'react'
import type { ButtonHTMLAttributes } from 'react'

type AccessibleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'primary'
}

export const AccessibleButton = forwardRef<HTMLButtonElement, AccessibleButtonProps>(
  ({ variant = 'default', className = '', ...props }, ref) => {
    const classes = [
      'btn transition-colors duration-150 focus:outline-none focus-visible:outline-2 focus-visible:outline-sky-400',
      variant === 'primary' ? 'btn-primary' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ')
    return <button ref={ref} className={classes} {...props} />
  }
)

AccessibleButton.displayName = 'AccessibleButton'


