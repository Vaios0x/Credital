import { Link } from 'react-router-dom'
import { StatusBadge } from '@/components/StatusBadge'
import { motion } from 'framer-motion'
import DashboardLayout from '@/components/DashboardLayout'
import { Skeleton } from '@/components/ui/Skeleton'
import { useEffect, useState } from 'react'

const invoices = [
  { id: 'INV-001', amount: 120000, status: 'Pending' as const },
  { id: 'INV-002', amount: 80000, status: 'Financed' as const },
  { id: 'INV-003', amount: 95000, status: 'Paid' as const },
]

export default function SmeDashboard() {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState<typeof invoices | null>(null)
  useEffect(() => {
    const id = setTimeout(() => {
      setItems(invoices)
      setLoading(false)
    }, 700)
    return () => clearTimeout(id)
  }, [])

  return (
    <DashboardLayout section="sme" title="Facturas" breadcrumbs="Inicio / PYMES / Facturas">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="flex items-center justify-between mb-3">
          <div />
          <Link to="upload" className="btn btn-primary" aria-label="Subir nueva factura">
            Subir factura
          </Link>
        </div>
        <div className="card overflow-auto" role="region" aria-label="Lista de facturas" style={{ padding: 0 }}>
          {loading ? (
            <div className="p-3 grid gap-2">
              <Skeleton height={18} />
              <Skeleton height={18} />
              <Skeleton height={18} />
            </div>
          ) : items && items.length > 0 ? (
            <table className="w-full border-collapse">
              <caption className="sr-only">Listado de facturas</caption>
              <thead className="bg-slate-50 sticky top-0">
                <tr className="text-left">
                  <th className="p-3 border-b border-slate-200">Folio</th>
                  <th className="p-3 border-b border-slate-200">Monto</th>
                  <th className="p-3 border-b border-slate-200">Estado</th>
                </tr>
              </thead>
              <tbody>
                {items.map((inv, idx) => (
                  <tr key={inv.id} className={idx % 2 ? 'bg-slate-50/50' : ''}>
                    <td className="p-3 border-b border-slate-200">{inv.id}</td>
                    <td className="p-3 border-b border-slate-200">
                      ${inv.amount.toLocaleString()}
                    </td>
                    <td className="p-3 border-b border-slate-200">
                      <StatusBadge status={inv.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-4"><p className="muted">No hay facturas aún.</p></div>
          )}
        </div>
      </motion.div>
    </DashboardLayout>
  )
}


