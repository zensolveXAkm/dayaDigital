import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css'; // Custom styles

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Typewriter Effect Logic

  const toggleNavbar = () => {
    setIsExpanded((prev) => !prev);
  };

  


  useEffect(() => {
    if (isExpanded && isMobile) {
      setTimeout(() => setIsExpanded(false), 5000); // Collapse navbar after 5 seconds
    }
  }, [isExpanded, isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <nav className={`navbar ${isExpanded ? 'open' : ''}`} onClick={toggleNavbar}>
      <div className="logo-container">
        {<h1 className="logo">Digital Line</h1>}
      </div>

      {/* Mobile Menu Icon */}
      {isMobile && <div className="menu-icon" onClick={toggleNavbar} />}

      {/* Desktop Navbar Links */}
      {(!isMobile && isExpanded) && (
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>
      )}

      {/* Mobile Navbar Links */}
      {isMobile && isExpanded && (
        <ul className="nav-links mobile">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
