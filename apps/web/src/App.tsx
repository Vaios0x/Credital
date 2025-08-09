import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import Home from '@/pages/Home'
import SmeDashboard from '@/pages/sme/Dashboard'
import UploadInvoice from '@/pages/sme/UploadInvoice'
import Marketplace from '@/pages/investors/Marketplace'
import PoolDetails from '@/pages/investors/PoolDetails'
import { Layout } from '@/components/Layout'
import { AnimatePresence, motion } from 'framer-motion'

export default function App() {
  const location = useLocation()
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/sme">
              <Route index element={<SmeDashboard />} />
              <Route path="upload" element={<UploadInvoice />} />
            </Route>
            <Route path="/investors">
              <Route index element={<Marketplace />} />
              <Route path="pools/:poolId" element={<PoolDetails />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}
