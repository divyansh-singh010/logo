// Navbar.js

// Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`custom-navbar-container ${menuOpen ? "open" : ""}`}>
      <div className="container">
        <div className="brand">
          <Link to="/" className="nav-link" onClick={toggleMenu}>
            <h2 className="logo-text">LOGO</h2>
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="logo"
              className="logo"
            />
          </Link>
        </div>
        <div className="toggle-button">
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            Menu
          </button>
        </div>
        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" className="nav-link" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="nav-link" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link" onClick={toggleMenu}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
