import React from 'react';

function navBar({ currentPage, setCurrentPage }) {
  return (
      <ul id='nav'>
        <li>
          <a
            href="#about"
            onClick={() => setCurrentPage('About')}

            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => setCurrentPage('Portfolio')}

            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"

            onClick={() => setCurrentPage('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#resume"

            onClick={() => setCurrentPage('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
  );
}

export default navBar;
