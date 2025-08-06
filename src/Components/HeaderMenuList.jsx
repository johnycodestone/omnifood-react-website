import React from "react";
import "../Styles/HeaderMenuList.css"; // .. to go one folder back

const HeaderMenuList = () => {
    return (
        <ul className="header-menu-list">
            <li className="header-menu-item">Food Delivery</li>
            <li className="header-menu-item">How it works</li>
            <li className="header-menu-item">Our Cities</li>
            <li className="header-menu-item">Sign Up</li>
        </ul>
    )
}

export default HeaderMenuList;