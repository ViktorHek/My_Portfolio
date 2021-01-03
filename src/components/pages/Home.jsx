import React from "react";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import "../../index.css";

function Home() {
  return (
    <div classname="homeContainer">
      <HeroSection />
      <Cards />
    </div>
  );
}

export default Home;
