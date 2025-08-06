import React from "react";
import "../Styles/Btn.css";

const Btn = ({children, cssClass}) => {
    return <button className={cssClass} id="btn">{children}</button>;
}

export default Btn;