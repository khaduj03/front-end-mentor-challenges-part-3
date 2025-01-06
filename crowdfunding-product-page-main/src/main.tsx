import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CounterProvider from './hooks/useCount.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CounterProvider>
    <App />
    </CounterProvider>
  </StrictMode>,
)
