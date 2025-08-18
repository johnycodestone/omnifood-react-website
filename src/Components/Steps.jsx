import React from "react";
import "../Styles/Steps.css";
import Step from "./Step";

const Steps = ({stepNumber, title}) => {
  return (
    <div className="steps-box">
        {stepNumber.map((step, index) => (
            <Step key={index} stepNumber={step} title={title[index]} />
        ))}
    </div>
  );
};

export default Steps;
