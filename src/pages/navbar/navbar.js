import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar-container">
      <div className={`navbar ${menuOpen ? "open" : ""}`}>
        <div className="navbar-links">
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            Menu
          </button>
          <ul className={`navbar-ul ${menuOpen ? "open" : ""}`}>
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
        <div className="navbar-image">
          <Link to="/" className="nav-link" onClick={toggleMenu}>
            <h2 className="logo-text">LOGO</h2>
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="logo"
              className="logo"
            />
          </Link>
        </div>
        <hr className="navbar-rule" />
      </div>
    </nav>
  );
};

export default Navbar;
