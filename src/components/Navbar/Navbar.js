import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";
import closeIcon from "../../images/icon-close.svg";

function Navbar() {
  const [open, setOpen] = useState(false);

  const showMenu = (e) => {
    setOpen(!open);
    e.target.src= closeIcon ;
  };

  const closeMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="navbar">
        {open ? (
          <div className="m">
            <div className="mobile-nav"></div>
            <div className="items">
              <ul>
                <li onClick={closeMenu}><a href="#career">Home</a></li>
                <li onClick={closeMenu}><a href="/">About</a></li>
                <li onClick={closeMenu}><a href="/">Contact</a></li>
                <li onClick={closeMenu}><a href="/">Blog</a></li>
                <li onClick={closeMenu}><a href="/">Careers</a></li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="container">
          <a href="/" className="navbar__logo">
            <img src={logo} alt="logo"/>
          </a>

          <ul className="navbar__links">
            <li>
              <a href="/" className="navbar__link">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="navbar__link">
                About
              </a>
            </li>
            <li>
              <a href="/" className="navbar__link">
                Blog
              </a>
            </li>
            <li>
              <a href="/" className="navbar__link">
                Contact
              </a>
            </li>
            <li>
              <a href="/" className="navbar__link">
                Careers
              </a>
            </li>
          </ul>
          <button className="btn">Request invite</button>
          <div className="hamburger">
            <img
              src={hamburger}
              onClick={showMenu}
              alt=""
              className="humbuger"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
