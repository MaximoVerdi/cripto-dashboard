import React from "react";
import { Outlet } from "react-router-dom";
import { SideNavBar } from "./sideNavBar/sideNavBar";
import "./dashboardLayout.css";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-content">
        <SideNavBar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export { DashboardLayout };