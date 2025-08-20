import "./App.css";
import React from "react";

import HeroSection from "./Components/HeroSection";
import QualitiesSection from "./Components/QualitiesSection";
import ImageGrid from "./Components/ImageGrid";
import StepsSection from "./Components/StepsSection";
import CitiesSection from "./Components/CitiesSection";
import ReviewsSection from "./Components/ReviewsSection";

function App() {
  return (
    <div className="home-page">
      <HeroSection />
      <QualitiesSection />
      <ImageGrid />
      <StepsSection />
      <CitiesSection />
      <ReviewsSection />
    </div>
  );
}

export default App;
