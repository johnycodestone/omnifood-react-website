import React from "react";
import "../Styles/HeroSection.css";
import HeaderMenu from "./HeaderMenu";
import Btn from "./Btn";

const HeroSection = () => {
  const heroTitle = (              // Correct way to add line break for react to render it properly
    <>
      Goodbye Junk Food.
      <br />
      Hello Super Healthy Meals.
    </>
  );
  return (
    <div className="hero-section">
      <HeaderMenu />
      <div className="hero-content">
        <h1 className="hero-title">{heroTitle}</h1>
        <div className="hero-btns">
          <Btn cssClass="colored">I`m hungry</Btn>
          <Btn cssClass="transparent">Show me more</Btn>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
