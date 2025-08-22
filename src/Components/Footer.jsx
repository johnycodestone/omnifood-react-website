import React from "react";
import "../Styles/Footer.css";
import FooterMenuList from "./FooterMenuList";

const Footer = () => {
  return (
    <div className="footer-menu">
      <FooterMenuList />
      <div className="footer-copyright">
        <p className="copyright">
          Copyright ©2025 by Omnifood. All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
