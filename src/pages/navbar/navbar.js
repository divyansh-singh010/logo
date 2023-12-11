import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="navbar-links">
          <ul className="navbar-ul">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="nav-link">
          <div className="navbar-image">
            <h2 className="logo-text">LOGO</h2>
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="logo"
              className="logo"
            />
          </div>
        </Link>
        <hr className="navbar-rule" />
      </div>
    </nav>
  );
};

export default Navbar;
