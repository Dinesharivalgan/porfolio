import React, { useState, useEffect } from 'react';
import './Navbar.css';

const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <button className="nav-logo" onClick={() => scrollTo('hero')}>
            Dinesh<span>.</span>
          </button>

          <ul className="nav-links">
            {sections.map((sec) => (
              <li key={sec}>
                <button
                  onClick={() => scrollTo(sec)}
                  className={sec === 'contact' ? 'nav-cta-btn' : ''}
                >
                  {sec === 'contact' ? 'Hire Me' : sec.charAt(0).toUpperCase() + sec.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }} />
            <span style={{ opacity: isOpen ? 0 : 1 }} />
            <span style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '' }} />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {sections.map((sec) => (
          <button key={sec} onClick={() => scrollTo(sec)}>
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </button>
        ))}
      </div>
    </>
  );
};

export default Navbar;
