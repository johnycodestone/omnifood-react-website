import React from "react";
import HeaderMenuList from "./HeaderMenuList";
import Logo from "../Assets/Images/logo-white.png";
import "../Styles/HeaderMenu.css"; // .. to go one folder back

const HeaderMenu = () => {
    return (
        <div className="header-menu">
            <img src={Logo} alt="OmniFood Logo" className="header-logo" />
            <nav className="header-nav">
                <HeaderMenuList />
            </nav>
        </div>
    )
}

export default HeaderMenu;
