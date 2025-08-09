import { z } from 'zod'

export const invoiceSchema = z.object({
  invoiceNumber: z.string().min(1, 'Requerido'),
  amount: z.number().positive('Debe ser positivo'),
  dueDate: z.string().min(1, 'Requerido'),
  debtorName: z.string().min(2, 'Muy corto'),
  debtorRFC: z.string().min(10, 'RFC inválido'),
})

export type InvoiceInput = z.infer<typeof invoiceSchema>


