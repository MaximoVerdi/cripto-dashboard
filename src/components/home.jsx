import 'boxicons/css/boxicons.min.css';
import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, HeroSection, Bento, Coins } from "./components.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <HeroSection />
    <Bento />
    <Coins />
  </BrowserRouter>
)

