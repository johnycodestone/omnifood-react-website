import React from "react";
import "../Styles/CitiesSection.css";
import CityInfo from "./CityInfo";
import Heading from "./Heading";

const CitiesSection = () => {
  let title = "We`re currently in these Cities";
  let color = "#555555";
  let cities = [
    {
      name: "Lisbon",
      image: "lisbon.jpg",
      eaters: "1600+ happy eaters",
      chefs: "60+ top chefs",
      page: "@omnifood_lx",
    },
    {
      name: "San Francisco",
      image: "san-francisco.jpg",
      eaters: "3700+ happy eaters",
      chefs: "160+ top chefs",
      page: "@omnifood_sf",
    },
    {
      name: "Berlin",
      image: "berlin.jpg",
      eaters: "2300+ happy eaters",
      chefs: "110+ top chefs",
      page: "@omnifood_berlin",
    },
    {
      name: "London",
      image: "london.jpg",
      eaters: "1200+ happy eaters",
      chefs: "50+ top chefs",
      page: "@omnifood_london",
    },
  ];

  return (
    <section className="cities-section">
      <Heading title={title} color={color} />
      <hr style={{backgroundColor: '#e67e22', width: '100px', height: '3px', border: 'none', borderRadius: '5px', marginBottom: '20px'}} />
      <div className="cities-container">
        {cities.map((city, index) => (
          <CityInfo
            key={index}
            name={city.name}
            image={city.image}
            eaters={city.eaters}
            chefs={city.chefs}
            page={city.page}
          />
        ))}
      </div>
    </section>
  );
};

export default CitiesSection;
