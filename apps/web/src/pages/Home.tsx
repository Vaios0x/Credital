import { Link } from 'react-router-dom'
// import { Card } from '@/components/Card'
import { motion } from 'framer-motion'
import Section from '@/components/landing/Section'
import '@/styles/landing.css'

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Section id="hero">
        <div className="grid gap-4 items-center md:grid-cols-[1.2fr,1fr] bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-950 rounded-xl p-4 md:p-6">
          <div>
            <h1 className="m-0 text-3xl leading-tight md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-cyan-500 dark:from-sky-400 dark:to-cyan-300">Financiamiento DeFi para PYMES con Activos del Mundo Real</h1>
            <p className="text-slate-700 dark:text-slate-300 m-0 mt-2">
              Tokeniza facturas y accede a capital ágil y transparente. Inversionistas obtienen rendimiento competitivo respaldado por flujos reales.
            </p>
            <div className="flex gap-2 items-center mt-3">
              <Link to="/sme" className="btn btn-primary" aria-label="Comenzar como PYME">
                Comenzar como PYME
              </Link>
              <Link to="/investors" className="btn" aria-label="Explorar como inversionista">
                Explorar pools
              </Link>
            </div>
          </div>
          <div>
            <div className="card bg-white/60 dark:bg-slate-900/40 backdrop-blur border border-slate-200/60 dark:border-slate-800/60" role="img" aria-label="Ilustración plataforma">
              <p className="muted">Vista de la plataforma (mock)</p>
              <div className="h-[140px] rounded-xl bg-slate-100 dark:bg-slate-800" />
            </div>
          </div>
        </div>
      </Section>

      <Section id="trust" title="Confianza y Cumplimiento" subtitle="Seguridad e integridad primero">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="feature">Custodia no programática y auditorías externas</div>
          <div className="feature">Integración KYC/KYB y verificación CFDI</div>
          <div className="feature">Oráculos Chainlink para eventos de pago</div>
        </div>
      </Section>

      <Section id="how" title="Cómo funciona">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="feature">1. La PYME sube la factura y datos SAT</div>
          <div className="feature">2. Motor de crédito con IA evalúa el riesgo</div>
          <div className="feature">3. Se tokeniza como NFT y se financia vía pool</div>
        </div>
      </Section>

      <Section id="benefits" title="Beneficios clave">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="feature">Liquidación rápida y transparente</div>
          <div className="feature">Costos competitivos y sin letra chica</div>
          <div className="feature">Diversificación por industria y riesgo</div>
        </div>
      </Section>

      <Section id="metrics" title="Métricas (mock)">
        <div className="grid gap-3 md:grid-cols-4">
          <div className="metric bg-white/60 dark:bg-slate-900/40 backdrop-blur border border-slate-200/60 dark:border-slate-800/60"><strong>$5.2M</strong><div className="muted">TVL</div></div>
          <div className="metric bg-white/60 dark:bg-slate-900/40 backdrop-blur border border-slate-200/60 dark:border-slate-800/60"><strong>11.6%</strong><div className="muted">APY histórico</div></div>
          <div className="metric bg-white/60 dark:bg-slate-900/40 backdrop-blur border border-slate-200/60 dark:border-slate-800/60"><strong>0.8%</strong><div className="muted">Default 90d</div></div>
          <div className="metric bg-white/60 dark:bg-slate-900/40 backdrop-blur border border-slate-200/60 dark:border-slate-800/60"><strong>+120</strong><div className="muted">Pymes activas</div></div>
        </div>
      </Section>

      <Section id="testimonials" title="Lo que dicen nuestros usuarios">
        <div className="testimonials">
          <div className="testimonial">“Financiamos inventario en 72h.” — PYME Retail</div>
          <div className="testimonial">“Rendimiento estable y transparente.” — Inversionista</div>
          <div className="testimonial">“Proceso simple y digital.” — PYME Logística</div>
        </div>
      </Section>

      <Section id="faq" title="Preguntas frecuentes">
        <div className="faq">
          <details>
            <summary>¿Qué es un RWA?</summary>
            Activo del Mundo Real tokenizado en la blockchain.
          </details>
          <details>
            <summary>¿Cómo se evalúa el riesgo?</summary>
            Con un modelo de IA que analiza flujos y CFDI (mock en MVP).
          </details>
          <details>
            <summary>¿Dónde se guarda mi dinero?</summary>
            En pools on-chain; la custodia es del smart contract.
          </details>
        </div>
      </Section>

      <Section id="cta">
        <div className="hero-cta">
          <Link to="/sme" className="btn btn-primary" aria-label="Crear cuenta PYME">
            Crear cuenta PYME
          </Link>
          <Link to="/investors" className="btn" aria-label="Empezar como inversionista">
            Empezar a invertir
          </Link>
        </div>
      </Section>
    </motion.div>
  )
}


