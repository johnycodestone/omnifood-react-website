import React from "react";
import "../Styles/CityInfo.css";

const CityInfo = ({ name, image, eaters, chefs, page }) => {
  return (
    <div className="city-info">
      <img
        src={require(`../Assets/Images/${image}`)}
        alt={name}
        className="city-image"
      />
      <h4 className="city-name">{name}</h4>
      <div className="city-details">
        <p className="city-eaters">
          <i className="icon ion-ios-person"></i>
          {eaters}
        </p>
        <p className="city-chefs">
          <i className="icon ion-ios-star"></i>
          {chefs}
        </p>
        <p className="city-page">
          <i className="icon ion-social-twitter"></i>
          {page}
        </p>
      </div>
    </div>
  );
};

export default CityInfo;
