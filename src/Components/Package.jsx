import React from "react";
import "../Styles/Package.css";

const Package = ({ heading, cost, average, features, index }) => {
  return (
    <div className="package">
      <div className="box-top">
        <h4 className="title">{heading}</h4>
        <h4 className="cost">{cost}</h4>
        <p className="average">{average}</p>
      </div>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>
            <i className={feature.type === "tick" ? "ion-ios-checkmark-empty" : "ion-ios-close-empty"}></i>
            {feature.text}
          </li>
        ))}
      </ul>
      <div className="package-footer">
        <button className={`btn ${index === 0 ? "btn-primary" : "btn-secondary"}`}>Sign Up Now</button>
      </div>
    </div>
  );
};

export default Package;
