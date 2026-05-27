import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ToastProviders } from './providers/ToastProviders.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProviders>
    <App />
    </ToastProviders>
  </StrictMode>,
)
