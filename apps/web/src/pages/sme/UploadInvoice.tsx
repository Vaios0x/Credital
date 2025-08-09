import { useState } from 'react'
import { motion } from 'framer-motion'
import { TextField } from '@/components/TextField'
import { invoiceSchema, type InvoiceInput } from '@/lib/schemas'
// import { AccessibleButton } from '@/components/AccessibleButton'
import { Button } from '@/components/ui/Button'
import { useUiStore } from '@/store/ui'

export default function UploadInvoice() {
  const [form, setForm] = useState<InvoiceInput>({
    invoiceNumber: '',
    amount: 0,
    dueDate: '',
    debtorName: '',
    debtorRFC: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const showToast = useUiStore((s) => s.showToast)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = invoiceSchema.safeParse({
      ...form,
      amount: Number(form.amount),
    })
    if (!res.success) {
      const errs: Record<string, string> = {}
      res.error.issues.forEach((i) => (errs[i.path.join('.')] = i.message))
      setErrors(errs)
      return
    }
    setErrors({})
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      showToast({ type: 'success', message: 'Factura enviada (mock)' })
    }, 900)
  }

  return (
    <motion.form
      className="grid"
      onSubmit={handleSubmit}
      aria-label="Formulario de factura"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <TextField
        label="Folio de Factura"
        id="invoiceNumber"
        value={form.invoiceNumber}
        onChange={(e) => setForm({ ...form, invoiceNumber: e.currentTarget.value })}
        error={errors.invoiceNumber}
        required
      />
      <TextField
        label="Monto"
        id="amount"
        type="number"
        inputMode="decimal"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: Number(e.currentTarget.value) })}
        error={errors.amount}
        required
      />
      <TextField
        label="Fecha de Vencimiento"
        id="dueDate"
        type="date"
        value={form.dueDate}
        onChange={(e) => setForm({ ...form, dueDate: e.currentTarget.value })}
        error={errors.dueDate}
        required
      />
      <TextField
        label="Deudor (Razón Social)"
        id="debtorName"
        value={form.debtorName}
        onChange={(e) => setForm({ ...form, debtorName: e.currentTarget.value })}
        error={errors.debtorName}
        required
      />
      <TextField
        label="RFC del Deudor"
        id="debtorRFC"
        value={form.debtorRFC}
        onChange={(e) => setForm({ ...form, debtorRFC: e.currentTarget.value })}
        error={errors.debtorRFC}
        required
      />
      <Button
        variant="primary"
        type="submit"
        aria-label="Enviar factura"
        loading={submitting}
        className="select-none touch-manipulation will-change-transform"
      >
        Enviar
      </Button>
    </motion.form>
  )
}


