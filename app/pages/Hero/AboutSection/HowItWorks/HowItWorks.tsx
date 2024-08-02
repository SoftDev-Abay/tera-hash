import React from "react";

import "./style.scss";

import InGameSlider from "@/app/components/InGameSlider/InGameSlider";

const inGameSliderItems = {
  mining: [
    {
      name: "Mine",
      imgURL: "/imgs/about-section/shop-item-tiny-shop.png",
      description:
        "Upgrade your mining farm to generate passive income. Check the app regularly to collect your profits.",
    },
    {
      name: "Mine2",
      imgURL: "/imgs/about-section/shop-item-tiny-shop.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sint tempora ex iste ab veritatis ipsa atque tempore porro, dolorem quas assumenda. Voluptate nisi molestias eveniet.",
    },
    {
      name: "Mine3",
      imgURL: "/imgs/about-section/shop-item-tiny-shop.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sint tempora ex iste ab veritatis ipsa atque tempore porro, dolorem quas assumenda. Voluptate nisi molestias eveniet.",
    },
  ],
  stakes: [
    {
      name: "Stake",
      imgURL: "/imgs/about-section/shop-item-cat.png",
      description: " Stake your funds to level up and earn regular rewards",
    },
    {
      name: "Stake2",
      imgURL: "/imgs/about-section/shop-item-cat.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sint tempora ex iste ab veritatis ipsa atque tempore porro, dolorem quas assumenda. Voluptate nisi molestias eveniet.",
    },
    {
      name: "Stake3",
      imgURL: "/imgs/about-section/shop-item-cat.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sint tempora ex iste ab veritatis ipsa atque tempore porro, dolorem quas assumenda. Voluptate nisi molestias eveniet.",
    },
  ],
};

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="header">
        <div className="title">How it works</div>
        <div className="subtitle">
          From strategic upgrades to maximizing income - every decision is yours
          to make
        </div>
      </div>

      <div className="main">
        {/* slider */}
        <InGameSlider
          items={inGameSliderItems.mining}
          className="slider"
          uniqueKey="mining"
        />
        <InGameSlider
          items={inGameSliderItems.stakes}
          className="slider"
          uniqueKey="staking"
        />

        <div className="info-cards">
          <div className="info-card">
            <div className="header">Tap</div>
            <div className="card-img-wrapper">
              <img
                className="card-img"
                src="/imgs/about-section/stack-of-3-gold-coins.png"
              />
              <img
                className="gradient-img-center"
                src="/imgs/about-section/about-section-gradient-orange.png"
                // w461  h342

                style={{
                  width: "461px",
                  height: "342px",
                }}
              />
            </div>
            <div className="card-description">
              Each tap gets you certain amount of Hashcoins. Boost its
              efficiency to earn more
            </div>
          </div>
          <div className="info-card">
            <div
              className="header"
              style={{
                marginBottom: "8px",
              }}
            >
              Unite and competes
            </div>
            <div
              className="card-img-wrapper"
              style={{
                marginBottom: "35px",
              }}
            >
              <img
                className="card-img"
                src="/imgs/about-section/cat-on-chair.png"
              />
              <img
                className="gradient-img-center"
                src="/imgs/about-section/about-section-gradient-azure-green.png"
                // w461  h342

                style={{
                  width: "461px",
                  height: "342px",
                }}
              />
            </div>
            <div className="card-description">
              Invite friends to earn bonuses and compete with them for the top
              spot on the leaderboard
            </div>
          </div>
          <div className="info-card">
            <div
              className="header"
              style={{
                marginBottom: "41px",
              }}
            >
              Complete Tasks
            </div>
            <div
              className="card-img-wrapper"
              style={{
                marginBottom: "32px",
              }}
            >
              <img
                className="card-img"
                src="/imgs/about-section/industry-awards.png"
              />
              <img
                className="gradient-img-center"
                src="/imgs/about-section/about-section-gradient-azure-purple.png"
                // w461  h342

                style={{
                  width: "461px",
                  height: "342px",
                }}
              />
            </div>

            <div className="card-description">
              Complete daily and social tasks to earn extra coins
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
