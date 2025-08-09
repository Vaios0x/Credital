# Credital — Plataforma de Financiamiento para PYMES con RWA

One-liner: Financiamiento ágil para PYMES mexicanas tokenizando facturas (RWA) y conectándolas con capital global en una plataforma segura y transparente.

Problema: 8 de cada 10 PYMES en México no acceden a crédito competitivo; procesos lentos, requisitos rígidos y costos altos frenan el crecimiento.

Solución: Marketplace de dos lados. PYMES suben facturas, un motor de riesgo (IA) evalúa y, si procede, se tokeniza el derecho de cobro (ERC-721). Inversionistas fondean pools (ERC-20) y capturan rendimiento con transparencia on-chain y oráculos off-chain.

Por qué ahora: Nearshoring, auge de RWA y madurez de infraestructura Web3 (Arbitrum/Polygon, Chainlink) habilitan una distribución de crédito más eficiente.

Producto (MVP):
- Portal PYMES: subida de CFDI, onboarding KYB, estatus de facturas (Pendiente, Financiada, Pagada).
- Portal Inversionistas: pools por perfil de riesgo/industria, métricas de rendimiento, depósitos/retiros.
- Orquestación: cuando se aprueba una factura, se prepara la acuñación del NFT y el fondeo desde el pool.

Modelo de negocio: tarifa de originación (1–2%), diferencial de tasa (spread) y futura tarifa de gestión institucional.

Moat (defensas): datos propietarios de comportamiento (CFDI, pagos), scoring conservador y partnerships con cámaras/empresas ancla; cumplimiento y trazabilidad aumentan switching costs.

Go-To-Market: pilotos con cámaras de comercio y agregadores de facturas; enfoque en industrias con deudores AA; referidos de contadores/ERP.

Riesgos y mitigación: fondo de primeras pérdidas, segregación custodial, auditorías de seguridad, sandbox regulatorio CNBV, contratos ejecutables con respaldo legal.

## Tecnologías

![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-19.x-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)
![Stylus](https://img.shields.io/badge/Stylus-CSS-333333)
![PostCSS](https://img.shields.io/badge/PostCSS-Plugins-DD3A0A?logo=postcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.x-0055FF?logo=framer&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-7.x-CA4245?logo=reactrouter&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-State-000000)
![Zod](https://img.shields.io/badge/Zod-Validation-3E67B1)
![Axios](https://img.shields.io/badge/Axios-HTTP-671DDF)

## Estructura

```
Credital/
  apps/
    web/              # Frontend (Vite + React + TS)
      src/
        components/
        pages/
        styles/       # Tailwind + Global + Stylus tokens
        store/
        lib/
      tailwind.config.js
      postcss.config.js
      vite.config.ts
```

## Scripts principales (frontend)

Desde `apps/web`:
- `npm run dev`: entorno de desarrollo
- `npm run build`: build de producción
- `npm run preview`: servidor local del build

## Desarrollo

1) Instalar dependencias:

```bash
cd apps/web
npm i
```

2) Ejecutar en desarrollo:

```bash
npm run dev
```

3) Variables de entorno (opcional):

Crea `apps/web/.env` y define:

```
VITE_API_BASE_URL=http://localhost:8000
```

## Accesibilidad y UX

- Navegación por teclado, `focus-visible` y `aria-*` en formularios/controles
- Modo claro/oscuro, reducción de movimiento y preferencias de tipografía/escala
- Feedback no intrusivo (toasts), skeletons de carga y estados vacío/error
- Animaciones sutiles con Framer Motion

## Estilo y UI

- Tailwind v4 + PostCSS ([instalación], [utilidades], [dark mode])
- Tokens y utilidades propios en `src/styles`
- Componentes reutilizables: `Card`, `Button`, `Tooltip`, `Toast`, `Skeleton`, `Section`

## Roadmap (MVP)

- Onboarding KYB/KYC (PYMES e inversionistas)
- Motor de scoring (FastAPI) y orquestación on-chain
- Integración Web3 (depósitos/withdraw a pools)
- UI de pools con métricas y performance
- Auditoría de contratos y pruebas de estrés
- Piloto con empresas ancla y medición de cohortes

Señales/Métricas (fase temprana): tiempo de originación (<72h), % aprobación conservadora, default 90d, TVL y APY histórico, CAC/LTV por segmento.

Cumplimiento y seguridad Web3: oráculos (Chainlink) para eventos de pago, segregación de roles on-chain, controles de acceso, logs inmutables, auditorías periódicas y transparencia de tarifas.

## Licencia

MIT © 2025 Credital

[instalación]: https://tailwindcss.com/docs/installation
[utilidades]: https://tailwindcss.com/docs/styling-with-utility-classes
[dark mode]: https://tailwindcss.com/docs/dark-mode
