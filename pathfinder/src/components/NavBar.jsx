import React, { useEffect, useState } from 'react';
import '../style.css';

const navLinks = [
  { label: 'Home', section: 'home-section' },
  { label: 'About', section: 'about-section' },
  { label: 'Contact', section: 'contact-section' },
];

const NavBar = ({ onNavClick }) => {
  const [activeSection, setActiveSection] = useState('home-section');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
  // Highlight active section on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActiveSection(visible.target.id);
    },
    { threshold: 0.1 }
  );

  navLinks.forEach((link) => {
    const section = document.getElementById(link.section);
    if (section) observer.observe(section);
  });

  return () => observer.disconnect();
}, []);

// 👉 Toggle overflow lock on body when menu is open
useEffect(() => {
  document.body.classList.toggle('menu-open', menuOpen);
}, [menuOpen]);

  return (
    <header className="header">
      {/* Logo */}
      <a
        href="#home-section"
        className="header__logo"
        onClick={(e) => {
          e.preventDefault();
          onNavClick('home-section');
        }}
      >
        <img src="/logo1.svg" alt="PathFinder Logo" className="nav-logo" />
      </a>

      {/* Desktop Nav */}
      <nav className="navbar">
        <ul className="navbar__menu">
          {navLinks.map((link) => (
            <li className="navbar__item" key={link.section}>
              <a
                href={`#${link.section}`}
                className={`navbar__link ${activeSection === link.section ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(link.section);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Circular Nav */}
      <input
        type="checkbox"
        id="active"
        checked={menuOpen}
        onChange={() => setMenuOpen(!menuOpen)}
      />
      <label htmlFor="active" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>

      <div className={`wrapper ${menuOpen ? 'show' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.section}>
              <a
                href={`#${link.section}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(link.section);
                  setMenuOpen(false); // close menu
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};


export default NavBar;
