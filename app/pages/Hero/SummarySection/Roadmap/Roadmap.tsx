import React from "react";
import "./style.scss";

const Roadmap = () => {
  return (
    <div className="container-max-width-1920 roadmap-wrapper">
      <div className="header">Roadmap</div>
      <div className="main">
        <div className="info">
          <div className="text-panel text-panel-check text-panel-icon-end">
            <p>Pre Launch</p>
            <div className="icon-img-wrapper check-icon-img-wrapper">
              <img
                src="/imgs/summary-section/blue-check-mark.png"
                width={26}
                height={26}
              />
            </div>
          </div>
          <div className="text-panel text-panel-check text-panel-icon-end">
            <p>1,000,000 Users</p>
            <div className="icon-img-wrapper check-icon-img-wrapper">
              <img
                src="/imgs/summary-section/blue-check-mark.png"
                width={26}
                height={26}
              />
            </div>
          </div>
          <div className="text-panel">
            <p>Pre Launch</p>
          </div>
          <div className="text-panel">
            <p>Shop Opening</p>
          </div>
          <div className="text-panel text-panel-icon-start text-panel-ruby">
            <img
              width={26}
              height={26}
              src="/imgs/summary-section/ruby-crystal-coin.png"
              className="check-icon"
            />
            <p>Exchange Negotiations</p>
          </div>
          <div className="text-panel">
            <p>Listing on Exchanges</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
