import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Dropdown from "./Dropdown";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          EPIC
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
