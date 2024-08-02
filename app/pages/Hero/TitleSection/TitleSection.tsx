import React from "react";
import Button from "@/app/components/Button/Button";
import "./style.scss";

const TitleSection = () => {
  return (
    <div className="title-section">
      <div className="info-container">
        <p className="action-text">Build your mining empire to become the</p>
        <div className="big-text-img">
          <img src="/imgs/title-section/title-section-big-text.png" alt="" />
        </div>
        <div className="addition-text">
          Tap, upgrade equipment, earn <span>Hashcoin,</span> and wait for
          airdrop
        </div>

        <div className="action-buttons-container">
          <Button illuminateShadow styleType="primary">
            Play for Free
          </Button>
          <Button styleType="standart">Learn More</Button>
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
