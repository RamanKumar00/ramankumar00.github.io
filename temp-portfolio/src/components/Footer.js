import React from 'react';
import { FOOTER_DATA } from '../const/data';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container centered-footer">
        <div className="footer-content">
          <span className="brand-logo-small">RK</span>
          <p className="copyright-text-small">
            {FOOTER_DATA.copyright}
            <span className="footer-separator"> | </span> 
            <span className="built-with-inline">
              Built with <span className="heart-icon">❤️</span> and passion
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
