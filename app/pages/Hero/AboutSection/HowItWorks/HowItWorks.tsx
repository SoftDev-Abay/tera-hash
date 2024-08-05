import React from "react";

import "./style.scss";

import InfoCardsSlider from "./InfoCardsSlider/InfoCardsSlider";

import InGameSlider from "@/app/components/InGameSlider/InGameSlider";
import useScreenWidth from "@/app/hooks/useScreenWidth";

const inGameSliderItems = {
  mining: {
    name: "Mine",
    imgsURL: [
      "/imgs/about-section/safe.png",
      "/imgs/about-section/shop-item-tiny-shop.png",
      "/imgs/about-section/pile-of-boxes.png",
    ],
    description:
      "Upgrade your mining farm to generate passive income. Check the app regularly to collect your profits.",
  },

  stakes: {
    name: "Stake",
    imgsURL: [
      "/imgs/about-section/fat-face-cat.png",
      "/imgs/about-section/in-spirit-cat.png",
      "/imgs/about-section/king-cat.png",
    ],
    description: " Stake your funds to level up and earn regular rewards",
  },
};

interface InfoCardDesktopProps extends React.HTMLAttributes<HTMLDivElement> {
  headerStyle: React.CSSProperties;
  imgWrapperStyle: React.CSSProperties;
  header: string;
  cardImg: string;
  gradientImg: string;
  cardDescription: string;
  gradientDimensions: React.CSSProperties;
}

const InfoCardDesktop = ({
  header,
  headerStyle,
  cardImg,
  gradientImg,
  cardDescription,
  gradientDimensions,
  imgWrapperStyle,
}: InfoCardDesktopProps) => {
  return (
    <div className="info-card-desktop border-glass-card">
      <div className="header" style={headerStyle}>
        {header}
      </div>
      <div className="card-img-wrapper" style={imgWrapperStyle}>
        <img className="card-img" src={cardImg} />
        <img
          className="gradient-img-center"
          src={gradientImg}
          style={gradientDimensions}
        />
      </div>
      <div className="card-description">{cardDescription}</div>
    </div>
  );
};

const HowItWorks = () => {
  const screenWidth = useScreenWidth();

  const isMobile = screenWidth < 1024;

  return (
    <div className="padding-wrapper  how-it-works" id="how-it-works">
      <div className="header">
        <div className="title">How it works?</div>
        <div className="subtitle">
          From strategic upgrades to maximizing income - every decision is yours
          to make
        </div>
      </div>

      <div className="main">
        {/* slider */}

        <InGameSlider
          item={inGameSliderItems.mining}
          className="slider "
          uniqueKey="mining"
          imgHeight={isMobile ? 149 :  392}
          imgWidth={isMobile ? 149 : 415}
        />
        <InGameSlider
          item={inGameSliderItems.stakes}
          className="slider "
          uniqueKey="staking"
          imgHeight={isMobile ? 230.44 : 457}
          imgWidth={isMobile ? 200.44 : 357}
        />

        <div className="info-cards-desktop">
          <InfoCardDesktop
            header="Tap"
            headerStyle={{ marginBottom: "41px" }}
            cardImg="/imgs/about-section/stack-of-3-gold-coins.png"
            gradientImg="/imgs/about-section/about-section-gradient-orange.png"
            gradientDimensions={{ width: "461px", height: "342px" }}
            cardDescription="Each tap gets you certain amount of Hashcoins. Boost its efficiency to earn more"
            imgWrapperStyle={{}}
          />
          <InfoCardDesktop
            header="Unite and competes"
            headerStyle={{ marginBottom: "8px" }}
            imgWrapperStyle={{ marginBottom: "35px" }}
            cardImg="/imgs/about-section/cat-on-chair.png"
            gradientImg="/imgs/about-section/about-section-gradient-azure-green.png"
            gradientDimensions={{ width: "461px", height: "342px" }}
            cardDescription="Invite friends to earn bonuses and compete with them for the top spot on the leaderboard"
          />
          <InfoCardDesktop
            header="Complete Tasks"
            headerStyle={{ marginBottom: "41px" }}
            imgWrapperStyle={{ marginBottom: "32px" }}
            cardImg="/imgs/about-section/industry-awards.png"
            gradientImg="/imgs/about-section/about-section-gradient-azure-purple.png"
            gradientDimensions={{ width: "461px", height: "342px" }}
            cardDescription="Complete daily and social tasks to earn extra coins"
          />
        </div>
      </div>
      {isMobile ? (
        <div className="info-cards-mobile-slider">
          <InfoCardsSlider />
        </div>
      ) : null}
    </div>
  );
};

export default HowItWorks;
