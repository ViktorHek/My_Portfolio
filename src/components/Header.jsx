import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="header">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/who" className="nav-links">
              Who?
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/what" className="nav-links">
              What?
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/why" className="nav-links">
              Why?
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/how" className="nav-links">
              How?
            </Link>
          </li>
        </ul>
    </nav>
  );
}

export default Header;
