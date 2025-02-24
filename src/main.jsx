import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './components/routes/router.jsx'
import "./components/index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)