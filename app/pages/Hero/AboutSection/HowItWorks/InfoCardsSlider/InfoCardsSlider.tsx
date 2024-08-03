import React from "react";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "./style.scss";

interface InfoCardMobileProps extends React.HTMLAttributes<HTMLDivElement> {
  header: string;
  cardImg: string;
  gradientImg: string;
  cardDescription: string;
  gradientDimensions: React.CSSProperties;
  imgStyle?: React.CSSProperties;
}

const InfoCardMobile = ({
  header,
  cardImg,
  gradientImg,
  cardDescription,
  gradientDimensions,
  imgStyle,
}: InfoCardMobileProps) => {
  return (
    <div className="info-card-desktop">
      <div className="card-img-wrapper">
        <img className="card-img" src={cardImg} style={imgStyle} />
        <img
          className="gradient-img-center"
          src={gradientImg}
          style={gradientDimensions}
        />
      </div>
      <div className="info-text">
        <p className="header">{header}</p>
        <p className="description">{cardDescription}</p>
      </div>
    </div>
  );
};

const InfoCardsSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
      className="mySwiper"
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: true,
      // }}
      // modules={[Autoplay]}
    >
      <SwiperSlide>
        <InfoCardMobile
          header="Tap"
          cardImg="/imgs/about-section/stack-of-3-gold-coins.png"
          gradientDimensions={{ width: "160px", height: "160px" }}
          imgStyle={{ width: "66.448px", height: "65" }}
          gradientImg="/imgs/about-section/about-section-gradient-orange.png"
          cardDescription="Each tap gets you certain amount of Hashcoins. Boost its efficiency to earn more"
        />
      </SwiperSlide>
      <SwiperSlide>
        <InfoCardMobile
          header="Unite and competes"
          cardImg="/imgs/about-section/cat-on-chair.png"
          gradientDimensions={{ width: "150px", height: "150px" }}
          imgStyle={{ width: "73.866px", height: "96.594px" }}
          gradientImg="/imgs/about-section/about-section-gradient-azure-green.png"
          cardDescription="Invite friends to earn bonuses and compete with them for the top spot on the leaderboard"
        />
      </SwiperSlide>
      <SwiperSlide>
        <InfoCardMobile
          header="Complete Tasks"
          imgStyle={{ width: "94px", height: "90.582px" }}
          // gradientDimensions={{ width: "114px", height: "105px" }}  too small, need same dimensions but bigger
          gradientDimensions={{ width: "150px", height: "150px" }}
          cardImg="/imgs/about-section/industry-awards.png"
          gradientImg="/imgs/about-section/about-section-gradient-azure-purple.png"
          cardDescription="Complete daily and social tasks to earn extra coins"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default InfoCardsSlider;
