import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, PERSONAL_INFO } from '../const/data';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.nav-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId);
    closeMenu();
    
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="nav-container">
        {/* Logo with Icon */}
        <div className="logo-section">
          <div className="logo-icon">
            <i className="material-icons-sharp">deployed_code</i>
          </div>
          <h2 className="logo-text">RAMO.DEV</h2>
        </div>

        {/* Navigation Links - Hidden on Mobile */}
        <div className="nav-links-wrapper">
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`} 
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                  {activeSection === item.id && <span className="nav-indicator"></span>}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <a 
            href={PERSONAL_INFO.resumeLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="resume-btn" 
            style={{ textDecoration: 'none' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px', position: 'relative', zIndex: 1 }}>download</span>
            <span style={{ position: 'relative', zIndex: 1 }}>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">NAVIGATION</span>
          <div className="mobile-menu-line"></div>
        </div>
        <ul className="mobile-nav-links">
          {NAV_ITEMS.map((item, index) => (
            <li key={item.id} style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
              <a 
                href={`#${item.id}`} 
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                <span className="mobile-nav-icon material-symbols-outlined">
                  {item.icon}
                </span>
                <span className="mobile-nav-text">{item.label}</span>
                {activeSection === item.id && <span className="mobile-nav-indicator"></span>}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-footer">
          <a 
            href={PERSONAL_INFO.resumeLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mobile-resume-btn"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <span className="material-symbols-outlined">download</span>
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
