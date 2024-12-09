import React, { useState, useEffect, useRef } from 'react';
import BtnCta from './BtnCta'; // Import du composant BtnCta
import logo from '../images/logo.png';
import darkLogo from '../images/logo-dark.png';
import '../styles/header.css';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 99) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header ref={headerRef} className={`header ${isActive ? 'active' : ''}`}>
      <div className="container">
        <a href="/" className="logo">
          <img src={logo} width="130" height="39" alt="Logo Moony" className="logo-light" />
          <img src={darkLogo} width="130" height="39" alt="Logo Moony" className="logo-dark" />
        </a>
        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <div className="navbar-top">
            <a href="/" className="logo">
              <img src={logo} width="130" height="39" alt="Logo Moony" />
            </a>
            <button className="nav-close-btn" aria-label="close menu" onClick={toggleMenu}>
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
          <ul className="navbar-list">
            <li><a href="#" className="navbar-link">Accueil</a></li>
            <li><a href="#" className="navbar-link">A propos</a></li>
            <li><a href="#" className="navbar-link">Nos Guides</a></li>
            <li><a href="#" className="navbar-link">Blog</a></li>
            {/* Remplacement du bouton par BtnCta */}
            <li>
              <BtnCta
                text="Postuler"
                bgColor={isActive ? 'bg-pink-400' : 'bg-primary-violet'}
                textColor="text-white"
              />
            </li>
          </ul>
        </nav>
        <button className="nav-open-btn" aria-label="open menu" onClick={toggleMenu}>
          <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
        </button>
        <div className={`overlay ${isMenuOpen ? 'active' : ''}`} aria-label="overlay" onClick={toggleMenu}></div>
      </div>
    </header>
  );
};

export default Header;