import React from "react";
import { Link } from "react-router-dom";
import "./sideNavBar.css";
import { Nav } from "../Nav/nav";

const SideNavBar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar__title">
        <h2>Crypto Dashboard</h2>
      </div>
      <ul className="sidebar-nav__list">
        <li className="sidebar-nav__item">
          <i class="bx bx-home-alt"></i>
          <Link className="sidebar-nav__item-link" to="/">
            Home
          </Link>
        </li>
        <li className="sidebar-nav__item">
          <i class="bx bx-desktop"></i>
          <Link className="sidebar-nav__item-link" to="/apiData">
            Dashboard
          </Link>
        </li>

        <li className="sidebar-nav__item">
          <i class="bx bx-bitcoin"></i>
          <Link className="sidebar-nav__item-link" to="/dashboard/crypto">
            Crypto
          </Link>
        </li>
        <li className="sidebar-nav__item">
          <i class="bx bx-candles"></i>
          <Link className="sidebar-nav__item-link" to="/dashboard/stock">
            Stock
          </Link>
        </li>
        <li className="sidebar-nav__item">
          <i class="bx bxs-contact"></i>
          <Link className="sidebar-nav__item-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { SideNavBar };
