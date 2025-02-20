import { useState } from 'react';
import './header.css';
import { NavItem } from '../NavItems/navItem.jsx';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
        <h2 className='header__title'>Cripto Dashboard</h2>
      <nav className="nav">
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
        <ul className={`nav-list ${isOpen ? "open" : ""}`}>
          <NavItem section="Home" to="/"></NavItem>
          <NavItem section="Dashboard" to="/api-data"></NavItem>
          <NavItem section="Contact" to="/contact"></NavItem>
          <button className="nav-item-btn">Download App</button>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
