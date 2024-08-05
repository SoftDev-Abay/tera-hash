import React from "react";
import Button from "@/app/components/Button/Button";
import "./style.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { gameURL } from "@/app/assets/Navigation";
const TitleSection = () => {
  return (
    <div className="container-max-width-1920 title-section">
      <div className="info-container">
        <p className="action-text">Build your mining empire to become the</p>
        <div className="big-text-img">
          <Image
            src="/imgs/title-section/title-section-big-text-origin.png"
            alt=""
            width={600}
            height={600}
            loading="eager"
          />
        </div>
        <div className="addition-text">
          Tap, upgrade equipment, earn <span>Hashcoin,</span> and wait for
          airdrop
        </div>

        <div className="action-buttons-container">
          <a href={gameURL} target="_blank" rel="noreferrer">
            <Button illuminateShadow styleType="primary">
              Play for Free
            </Button>
          </a>
          <a href="#about">
            <Button styleType="standart">Learn More</Button>
          </a>
        </div>
      </div>
      <div className="img-container">
        <Image
          className="main-img-cat"
          src="/imgs/title-section/title-section-cat-cut.png"
          alt=""
          width={500}
          height={500}
          loading="eager"
          // fill
        />
        {/* <img
          className="main-img-cat"
          src="/imgs/title-section/title-section-cat-cut-slim.png"
          alt=""
        /> */}

        <div className="gold-coin-tilted-right float float-delay-2s"></div>
        <div className="gold-coin-tilted-left float float-delay-1s"></div>
        <div className="gold-coin-blured float float-delay-3s"></div>
        <div className="gradient"></div>
      </div>

      <div className="action-buttons-container-bottom">
        <a href={gameURL} target="_blank" rel="noreferrer">
          <Button illuminateShadow styleType="primary">
            Play for Free
          </Button>
        </a>
        <a href="#about">
          <Button styleType="standart">Learn More</Button>
        </a>
      </div>
    </div>
  );
};

export default TitleSection;
