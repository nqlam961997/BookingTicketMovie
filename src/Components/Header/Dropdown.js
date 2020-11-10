import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuItems } from "./MenuItem";

export default function Dropdown(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const renderDropdownMenu = () => {
    return MenuItems.map((item, index) => {
      return (
        <li key={index}>
          <NavLink
            className={item.cName}
            to={item.path}
            onClick={() => setClick(false)}
          >
            {item.title}
          </NavLink>
        </li>
      );
    });
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {renderDropdownMenu()}
      </ul>
    </>
  );
}
