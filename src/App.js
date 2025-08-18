import "./App.css";
import React from "react";
import HeroSection from "./Components/HeroSection";
import QualitiesSection from "./Components/QualitiesSection";
import ImageGrid from "./Components/ImageGrid";

function App() {
  return (
    <div className="home-page">
      <HeroSection />
      <QualitiesSection />
      <ImageGrid />
    </div>
  );
}

export default App;
