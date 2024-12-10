import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './mytodo.scss'
import App from './App.tsx'
import 'bootstrap-icons/font/bootstrap-icons.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
