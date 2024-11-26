import React from "react";
import HeroSection from "../components/heroSection";
import Tokenomics from "../components/Tokenomics";
import About from "../components/about";

function Landingpage() {
  return (
    <div>
      <HeroSection />
      <About/>
      <Tokenomics/>
    </div>
  );
}

export default Landingpage;
