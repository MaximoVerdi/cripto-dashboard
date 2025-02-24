import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './header.css';
import { Nav } from '../Nav/nav.jsx';

const Header = ({ isApiData }) => {
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
    
    <header className={`header ${isApiData ? "header-block" : ""}`}>
      <Link to="/"><h2 className='header__title'>Crypto Dashboard</h2></Link>
      <Nav />
    </header>
  );
};

export { Header };
