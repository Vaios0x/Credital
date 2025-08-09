import { useParams } from 'react-router-dom'
import { AccessibleButton } from '@/components/AccessibleButton'
import { motion } from 'framer-motion'

export default function PoolDetails() {
  const { poolId } = useParams()
  return (
    <motion.div className="card p-4 md:p-5" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="mt-0">Pool: {poolId}</h2>
      <p className="text-slate-600 dark:text-slate-300">
        Detalle del pool, composición de activos (anonimizada) y rendimiento histórico (mock).
      </p>
      <div className="flex gap-3">
        <AccessibleButton variant="primary" aria-label="Depositar USDC">
          Depositar USDC
        </AccessibleButton>
        <AccessibleButton aria-label="Retirar">
          Retirar
        </AccessibleButton>
      </div>
    </motion.div>
  )
}


