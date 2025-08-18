import React from "react";
import "../Styles/Quality.css";
// import "../Styles/ionicons.min.css";

const Quality = ({icon, title, description}) => {
    return (
        <div className="quality">
            <i className={`${icon} quality-icon`}></i>
            <h3 className="quality-title">{title}</h3>
            <p className="quality-description">{description}</p>
        </div>
    )
}

export default Quality;