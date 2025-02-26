import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sideNavBar.css";

const SideNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="hamburger-btn" onClick={toggleMenu}>
        <i className="bx bx-menu"></i>
      </button>

      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar__title">
          <h2>FinTrack Hub</h2>
        </div>
        <ul className="sidebar-nav__list">
          <li className="sidebar-nav__item">
            <Link className="sidebar-nav__item-link" to="/">
              <i className="bx bx-home-alt"></i>
              <span className="link-text">Home</span>
            </Link>
          </li>
          <li className="sidebar-nav__item">
            <Link className="sidebar-nav__item-link" to="/apiData">
              <i className="bx bx-desktop"></i>
              <span className="link-text">Dashboard</span>
            </Link>
          </li>
          <li className="sidebar-nav__item">
            <Link className="sidebar-nav__item-link" to="/contact">
              <i className="bx bxs-contact"></i>
              <span className="link-text">Contact</span>
            </Link>
          </li>
          <hr />
          <li className="sidebar-nav__item">
            <Link className="sidebar-nav__item-link" to="/dashboard/crypto">
              <i className="bx bx-bitcoin"></i>
              <span className="link-text">Crypto</span>
            </Link>
          </li>
          <li className="sidebar-nav__item">
            <Link className="sidebar-nav__item-link" to="/dashboard/stock">
              <i className="bx bx-candles"></i>
              <span className="link-text">Stock</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { SideNavBar };
