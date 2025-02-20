import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from "./header/header.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeroSection } from './heroSection/heroSection.jsx';
import 'boxicons/css/boxicons.min.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <HeroSection />
  </BrowserRouter>
)
