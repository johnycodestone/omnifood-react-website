import React from 'react';
import "../Styles/Step.css";

const Step = ({stepNumber, title}) => {
    return (
        <div className="step-item">
            <div className="number-circle">
                <h3 className="step-number">{stepNumber || "Step Number"}</h3>
            </div>    
            <h4 className="step-title">{title || "Step Title"}</h4>
        </div>
    )
}

export default Step;