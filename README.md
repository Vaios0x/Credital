# Credital — Plataforma de Financiamiento para PYMES con RWA

Credital es una plataforma DeFi que conecta PYMES mexicanas con inversionistas globales. Las PYMES tokenizan sus cuentas por cobrar como Activos del Mundo Real (RWA) y obtienen financiamiento ágil y transparente; los inversionistas acceden a rendimientos competitivos respaldados por flujos reales.

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

## Licencia

MIT © 2025 Credital

[instalación]: https://tailwindcss.com/docs/installation
[utilidades]: https://tailwindcss.com/docs/styling-with-utility-classes
[dark mode]: https://tailwindcss.com/docs/dark-mode
