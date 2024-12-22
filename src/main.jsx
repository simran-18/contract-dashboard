import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContractsProvider } from './contexts/AppContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContractsProvider>
    <App />
    </ContractsProvider>
  </StrictMode>,
)
