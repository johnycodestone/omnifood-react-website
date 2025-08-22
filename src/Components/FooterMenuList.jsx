import React from "react";
import "../Styles/FooterMenuList.css";

const FooterMenuList = () => {
    let pageLinks = ["About Us", "Blog", "Press", "iOS App", "Android App"];
    let socialLinks = ["facebook", "twitter", "googleplus", "instagram"];
    return (
        <div className="footer-list">
            <ul className="page-links">
                {pageLinks.map((pageLink, index) => (
                    <li className="page-link" key={index}>{pageLink}</li>
                ))}
            </ul>

            <ul className="social-links">
                {socialLinks.map((socialLink, index) => (
                    <li className="social-link" key={index}><i className={`ion-social-${socialLink}`}></i></li>
                ))}
            </ul>
        </div>
    )
}

export default FooterMenuList;