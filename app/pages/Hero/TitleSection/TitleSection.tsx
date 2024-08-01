import React from "react";

import "./style.scss";

const TitleSection = () => {
  return (
    <div className="title-section">
      <div className="info-container">
        <p className="action-text">
          Build your mining empire to become the
        </p>
        <div className="big-text-img">
          <img src="/imgs/title-section/title-section-big-text.png" alt="" />
        </div>
        <div className="addition-text">
          Tap, upgrade equipment, earn <span>Hashcoin,</span> and wait for
          airdrop
        </div>

        <div className="action-buttons-container">
          <button className="btn btn-filled">Play for Free</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="img-container">
        <img
          className="main-img-cat"
          src="/imgs/title-section/title-section-cat-cut.png"
        />
        <div className="gold-coin-tilted-right"></div>
        <div className="gold-coin-tilted-left"></div>
        <div className="gold-coin-blured"></div>
        <div className="gradient"></div>
      </div>
    </div>
  );
};

export default TitleSection;
