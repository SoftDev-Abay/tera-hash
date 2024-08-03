import React from "react";

import "./style.scss";

import AboutGrid from "./AboutGrid/AboutGrid";
import HowItWorks from "./HowItWorks/HowItWorks";

const AboutSection = () => {
  return (
    <div className="container-max-width-1920 about-section">
      <AboutGrid />
      <HowItWorks />

      <img
        className="elipsis azure-elipsis"
        src="/ellipses/azure-ellipse.png"
      />
      <img
        className="elipsis yellow-elipsis"
        src="/ellipses/yellow-ellipse.png"
      />
      <img
        className="elipsis purple-elipsis"
        src="/ellipses/purple-ellipse.png"
      />
      <img
        className="elipsis bottom-azure-elipsis"
        src="/ellipses/azure-ellipse.png"
      />
      <img
        className="elipsis bottom-yellow-elipsis"
        src="/ellipses/yellow-ellipse.png"
      />
      <img
        className="elipsis bottom-purple-elipsis"
        src="/ellipses/purple-ellipse.png"
      />
    </div>
  );
};

export default AboutSection;
