import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const navStyle = { color: "#fff" };
  return (
    <div>
      <nav>
        <ul className="nav-link">
          <Link style={navStyle} to="/about">
            <li>About</li>
          </Link>
          <Link style={navStyle} to="/contact">
            <li>Contact</li>
          </Link>
          <Link style={navStyle} to="/services">
            <li>Services</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
