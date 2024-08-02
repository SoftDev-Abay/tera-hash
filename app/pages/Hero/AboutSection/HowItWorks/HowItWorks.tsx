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
        <div className="slider">
          <InGameSlider items={inGameSliderItems.mining} uniqueKey="mining" />
        </div>
        <div className="slider">
          <InGameSlider items={inGameSliderItems.stakes} uniqueKey="staking" />
        </div>

        <div className="info-cards">
          <div className="info-card">
            <div className="header">Tap</div>
            <img
              className="card-img"
              src="/imgs/about-section/stack-of-3-gold-coins.png"
            />
            <div className="card-description">
              Each tap gets you certain amount of Hashcoins. Boost its
              efficiency to earn more
            </div>
          </div>
          <div className="info-card">
            <div className="header">Tap</div>
            <img
              className="card-img"
              src="/imgs/about-section/stack-of-3-gold-coins.png"
            />
            <div className="card-description">
              Each tap gets you certain amount of Hashcoins. Boost its
              efficiency to earn more
            </div>
          </div>
          <div className="info-card">
            <div className="header">Tap</div>
            <img
              className="card-img"
              src="/imgs/about-section/stack-of-3-gold-coins.png"
            />
            <div className="card-description">
              Each tap gets you certain amount of Hashcoins. Boost its
              efficiency to earn more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
