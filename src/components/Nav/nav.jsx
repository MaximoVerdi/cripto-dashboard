import { Link } from 'react-router-dom';
import "../header/header.css";
import { useState, useEffect } from 'react';

const Nav = () => {
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
        <nav className={`nav`}>
                <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                  ☰
                </div>
                <ul className={`nav-list ${isOpen ? "open" : ""}`}>
                    <li className="nav-item">
                      <Link className='nav-item-link' to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className='nav-item-link' to="/dashboard/crypto">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                      <Link className='nav-item-link' to="/contact">Contact</Link>
                    </li>
                  <button className="nav-item-btn">Explore dashboard</button>
                </ul>
        </nav>    
    )
}

export { Nav }

