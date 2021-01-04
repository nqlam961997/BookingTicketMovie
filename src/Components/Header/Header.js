import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";

export default function Header(props) {
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(true);
  //   } else {
  //     setDropdown(true);
  //   }
  //   console.log(dropdown);
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };

  const userLogin = useSelector(
    (state) => state.QuanLyNguoiDungReducer.userLogin
  );

  window.addEventListener("scroll", () => {
    let nav = document.querySelector("nav");
    if (nav) {
      nav.classList.toggle("sticky", window.scrollY > 0);
    }
    if (window.innerWidth < 960) {
      nav.classList.remove("sticky");
    }
  });

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        <p>
          <span>C</span>YBERMOVIE
        </p>
      </NavLink>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <div className="navbar-collapse">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            // onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
          >
            <a
              href="#phimDangChieu"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              PHIM
              {/* <i className="fas fa-caret-down"></i> */}
            </a>
            {/* {dropdown && <Dropdown />} */}
          </li>
          <li className="nav-item">
            <a href="#cumRap" className="nav-links" onClick={closeMobileMenu}>
              CỤM RẠP
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#lienhe"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              LIÊN HỆ
            </a>
          </li>
          <li className="nav-item">
            {userLogin.taiKhoan ? (
              <NavLink
                to="/thongtintaikhoan/profile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <span>
                  XIN CHÀO, {userLogin.taiKhoan} !{" "}
                  <NavLink
                    to="/"
                    remove={userLogin}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    THOÁT
                  </NavLink>
                </span>
              </NavLink>
            ) : (
              <NavLink
                to="/dangnhap"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ĐĂNG NHẬP / ĐĂNG KÝ
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
