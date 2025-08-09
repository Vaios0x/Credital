import { Link } from 'react-router-dom'
import { Card } from '@/components/Card'
import { motion } from 'framer-motion'
import DashboardLayout from '@/components/DashboardLayout'
import { Skeleton } from '@/components/ui/Skeleton'
import { useEffect, useState } from 'react'

const pools = [
  { id: 'tech', name: 'Facturas Sector Tech', apy: 12.8, tvl: 3_500_000 },
  { id: 'retail', name: 'Facturas Retail', apy: 10.4, tvl: 5_200_000 },
  { id: 'logistics', name: 'Logística', apy: 11.1, tvl: 2_100_000 },
]

export default function Marketplace() {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState<typeof pools | null>(null)
  useEffect(() => {
    const id = setTimeout(() => {
      setItems(pools)
      setLoading(false)
    }, 700)
    return () => clearTimeout(id)
  }, [])

  return (
    <DashboardLayout section="investors" title="Marketplace" breadcrumbs="Inicio / Inversionistas / Marketplace">
      <motion.div className="grid gap-4 md:grid-cols-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {loading ? (
          <>
            <Skeleton height={120} />
            <Skeleton height={120} />
            <Skeleton height={120} />
          </>
        ) : (
          items?.map((p) => (
            <Card key={p.id} title={p.name} description={`APY ${p.apy}% · TVL $${p.tvl.toLocaleString()}`}>
              <Link to={`/investors/pools/${p.id}`} className="btn btn-primary" aria-label={`Ver pool ${p.name}`}>
                Ver pool
              </Link>
            </Card>
          ))
        )}
      </motion.div>
    </DashboardLayout>
  )
}


