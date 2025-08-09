import { useEffect } from 'react'
import { useUiStore } from '@/store/ui'

export function ToastContainer() {
  const toast = useUiStore((s) => s.toast)
  const clear = useUiStore((s) => s.clearToast)

  useEffect(() => {
    if (!toast) return
    const id = setTimeout(clear, 3500)
    return () => clearTimeout(id)
  }, [toast, clear])

  if (!toast) return null
  return (
    <div className="toast-container" role="status" aria-live="polite">
      <div className={`toast ${toast.type}`}>{toast.message}</div>
    </div>
  )
}

export default ToastContainer


