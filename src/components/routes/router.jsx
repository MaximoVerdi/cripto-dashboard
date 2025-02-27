import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../../pages/home";
import { ApiData } from "../../pages/apiData";
import { Contact } from "../../pages/contact";
import { DashboardLayout } from "../dashboardLayout";
import { CryptoDashboard } from "../cryptoDashboard/cryptoDashboard";
import { StockDashboard } from "../stockDashboard/stockDashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apiData" element={<ApiData />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Navigate to="crypto" />} />
          <Route path="crypto" element={<CryptoDashboard />} />
          <Route path="stock" element={<StockDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
