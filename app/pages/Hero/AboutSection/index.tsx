import React from "react";

import "./style.scss";

import AboutGrid from "./AboutGrid/AboutGrid";
import HowItWorks from "./HowItWorks/HowItWorks";

const AboutSection = () => {
  return (
    <div className="padding-wrapper container-max-width-1920 about-section">
      <AboutGrid />
      <HowItWorks />
    </div>
  );
};

export default AboutSection;
