import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from "./header/header.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
  </BrowserRouter>,
)
