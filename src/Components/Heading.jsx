import React from 'react';
import "../Styles/Heading.css";

const Heading = ({title, color}) => {
    return (
        <div className="heading">
            <h1 style={{color: color}}>{title}</h1>
        </div>
    )
}

export default Heading;