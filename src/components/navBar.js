import React from 'react';
import "../components/Header/header.css"

function navBar({ currentPage, setCurrentPage }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav nav-item">
        <a
          href="#about"
          onClick={() => setCurrentPage('About')}
        
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className=" nav nav-item">
        <a 
          href="#portfolio"
          onClick={() => setCurrentPage('Portfolio')}

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav nav-item">
        <a
          href="#contact"

          onClick={() => setCurrentPage('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default navBar;
