import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

export default function Header(props) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const addSticky = () => {
    let nav = document.querySelector(".navbar");
    nav.classList.toggle("sticky", window.scrollY > 0);
  };

  return (
    <nav className="navbar" onScroll={addSticky}>
      <NavLink to="/" className="navbar-logo">
        <p>
          <span>C</span>YBERSOFT
        </p>
      </NavLink>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <NavLink to="#" className="nav-links" onClick={closeMobileMenu}>
            PHIM <i className="fas fa-caret-down"></i>
          </NavLink>
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
            CỤM RẠP
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/lienhe" className="nav-links" onClick={closeMobileMenu}>
            LIÊN HỆ
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dangnhap"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            ĐĂNG NHẬP / ĐĂNG KÝ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
