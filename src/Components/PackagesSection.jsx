import React from "react";
import "../Styles/PackagesSection.css";
import Package from "./Package";
import Heading from "./Heading";

const PackagesSection = () => {
  let title = "Start Eating Healthy today";
  let color = "#555555";
  let packages = [
    {
      heading: "PREMIUM",
      cost: "$399/meal",
      average: "That`s only $13.30 per meal!",
      features: [
        {text:"1 meal every day", type: "tick"},
        {text:"Order 24/7", type: "tick"},
        {text: "Access to newest creations", type: "tick"},
        {text: "Free delivery", type: "tick"},
      ],
    },
    {
      heading: "PRO",
      cost: "$149/meal",
      average: "That`s only $14.90 per meal!",
      features: [
        {text:"1 meal 10 days/month", type: "tick"},
        {text:"Order 24/7", type: "tick"},
        {text:"Access to newest creations", type: "tick"},
        {text:"Free delivery", type: "tick"},
      ],
    },
    {
      heading: "STARTER",
      cost: "$19/meal",
      average: "That`s only $19 per meal!",
      features: [
        {text:"1 meal", type: "tick"},
        {text:"Order from 8am to 12pm", type: "tick"},
        {text:"Access to newest creations", type: "cross"},
        {text:"Free delivery", type: "tick"},
      ],
    },
  ];
  return (
    <div className="packages-section">
      <Heading title={title} color={color} />
      <hr
        style={{
          backgroundColor: "#e67e22",
          width: "100px",
          height: "3px",
          border: "none",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      />
      <div className="packages">
        {packages.map((pkg, index) => (
          <Package
            key={index}
            heading={pkg.heading}
            cost={pkg.cost}
            average={pkg.average}
            features={pkg.features}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default PackagesSection;
