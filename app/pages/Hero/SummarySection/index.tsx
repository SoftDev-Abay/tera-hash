import React from "react";
import Roadmap from "./Roadmap/Roadmap";
import Tips from "./Tips/Tips";
import CallToAction from "./CallToAction/CallToAction";

import "./style.scss";

const SummarySection = () => {
  return (
    // <div className="padding-wrapper container-max-width-1920 summary-section">
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <div className=" container-max-width-1920 summary-section">
        <Tips />
        <Roadmap />
      </div>
      <div className="call-to-action-wrapper">
        <CallToAction />
      </div>
    </div>
  );
};

export default SummarySection;
