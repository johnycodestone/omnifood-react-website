import React from "react";
import HeaderMenuList from "./HeaderMenuList";
import Logo from "../Assets/Images/logo-white.png";
import "../Styles/HeaderMenu.css"; // .. to go one folder back
import {useState} from "react";

const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menuClass = isOpen ? "open" : "";
  const listClass = isOpen ? "" : "closed";
  return (
    <div className="header-menu">
      <img src={Logo} alt="OmniFood Logo" className="header-logo" />
      <nav className={`header-nav ${listClass}`}>
        <HeaderMenuList />
      </nav>
      <button className={`hamburger-menu ${menuClass}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </div>
  );
};

export default HeaderMenu;
