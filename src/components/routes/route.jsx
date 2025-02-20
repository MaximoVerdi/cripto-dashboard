import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ApiData from './components/api-data';
import Contact from './components/Contact';

function Route() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api-data" element={<ApiData />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export { Route };