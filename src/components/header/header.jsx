import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './header.css';
import { NavItem } from '../NavItems/navItem.jsx';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrollPos > 100) {
      document.querySelector('.header').classList.add('scroll');
    } else {
      document.querySelector('.header').classList.remove('scroll');
    }
  }, [scrollPos]);

  return (
    
    <header className={`header`}>
      <Link to="/"><h2 className='header__title'>Crypto Dashboard</h2></Link>
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
