# Cotizador de Criptomonedas

Aplicación web desarrollada con **React** y **Vite** para consultar cotizaciones de criptomonedas en tiempo real frente a diferentes divisas internacionales.

## Descripción

La aplicación permite al usuario seleccionar una divisa fiat (USD, MXN, EUR, GBP) y una criptomoneda del listado dinámico de las 10 principales criptomonedas del mercado (Bitcoin, Ethereum, etc.) para calcular la cotización instantánea.

## Características principales

- **Integración con API pública:** Consulta la API de [CryptoCompare](https://min-api.cryptocompare.com/) para obtener:
  - Las 10 criptomonedas con mayor capitalización de mercado.
  - Precio actual, precio máximo y mínimo del día, variación porcentual de las últimas 24 horas y fecha de actualización.
- **Custom Hooks:** Implementación de hooks personalizados (`useMoneda` y `useCripto`) para desacoplar el estado y el renderizado de los selectores del formulario.
- **Feedback visual:** Indicador de carga animado (`Spinner`) y validación de campos obligatorios con mensajes de error.
- **Componentes compartidos:** Integración de componentes unificados (`Header`, `Footer`, `Spinner`) del paquete compartido del workspace.

## Stack tecnológico

- **React 17** (Hooks, Custom Hooks, Componentes funcionales)
- **Vite** (Build tool y servidor de desarrollo ultrarrápido)
- **Axios** (Cliente HTTP para consumo de API REST)
- **Tailwind CSS v4** y **Emotion** (`@emotion/styled`) para el diseño y estilos modulares
- **Vitest** y **Testing Library** para pruebas unitarias y de integración

## Scripts disponibles

En el directorio del proyecto puedes ejecutar:

```bash
# Iniciar servidor de desarrollo en http://localhost:5173
npm start

# Compilar para producción
npm run build

# Previsualizar el bundle de producción
npm run preview

# Ejecutar tests con Vitest
npm test -- --run
```
