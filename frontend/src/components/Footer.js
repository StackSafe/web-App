import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <span className="text-muted">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">GitHub</a> | <a href="https://gnosis-safe.io/docs/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">Documentation Gnosis Safe</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;