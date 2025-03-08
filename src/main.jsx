import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './components/routes/router.jsx'
import "./components/index.css"
import { ThemeProvider } from "./components/themeContext/themeContext.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </StrictMode>,
)