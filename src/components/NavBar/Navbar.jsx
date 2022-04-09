import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { click } from "@testing-library/user-event/dist/click";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            ADILABAD REALESTATE
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Properties"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Properties
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Admin" className="nav-links" onClick={closeMobileMenu}>
                Admin
              </Link>
            </li>

            <li className="nav-item2">
              <Link to="/Login" className="Sign-in" onClick={closeMobileMenu}>
                Login
              </Link>
              <Link
                to="/Properties"
                className="add-property"
                onClick={closeMobileMenu}
              >
                +ADD PROPERTY
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
