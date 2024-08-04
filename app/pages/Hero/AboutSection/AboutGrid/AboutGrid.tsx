import React, { useState } from "react";

import "./style.scss";
import Button from "@/app/components/Button/Button";

const aboutGridItems = [
  {
    imgURL: "/imgs/about-section/algorithm.png",
    description: "Gameplay is based and improved upon analysis of 30+ games",
  },
  {
    imgURL: "/imgs/about-section/referral-bonus.png",
    description: "Amazing game design",
  },
  {
    imgURL: "/imgs/about-section/investor-meeting.png",
    description:
      "Team of 20+ people who have created tens of games with multimillion audiences",
  },
  {
    imgURL: "/imgs/about-section/payout.png",
    description:
      "Play-to-earn model, where you can earn before the $HASH airdrop",
  },
  {
    imgURL: "/imgs/about-section/lock-coin.png",
    description: "Lots of viral gaming mechanics as 2-tiered referral program",
  },
  {
    imgURL: "/imgs/about-section/crypto-cloud.png",
    description:
      "Team with significant network and experience in crypto since 2017 (exchanges, partnerships, etc.)",
  },
];

interface AboutGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  imgURL: string;
  description: string;
}

const AboutGridItem = ({
  imgURL,
  description,
  ...rest
}: AboutGridItemProps) => {
  return (
    <div {...rest} className={`about-grid-item ${rest.className}`}>
      <div className={`about-grid-item-content`}>
        <img src={imgURL} alt="about-grid-item" />
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

const AboutGrid = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="padding-wrapper  about-grid-wrapper">
      <div className="header">Hashcats is the next unicorn</div>
      <div className="grid">
        <div className={`container ${showMore ? "expanded" : "closed"}`}>
          <span className="line-divider line-divider-horizontal "></span>
          <span className="line-divider line-divider-vertical line-divider-vertical-1 "></span>
          <span className="line-divider line-divider-vertical line-divider-vertical-2 "></span>

          {aboutGridItems.slice(0, 3).map((item, index) => (
            <AboutGridItem
              key={index}
              imgURL={item.imgURL}
              description={item.description}
              className="item"
            />
          ))}

          {aboutGridItems.slice(3, 6).map((item, index) => (
            <AboutGridItem
              key={index}
              imgURL={item.imgURL}
              description={item.description}
              className={`item `}
            />
          ))}
        </div>
      </div>
      <div className="see-more-button-wrapper">
        <Button styleType="standart" onClick={() => setShowMore(!showMore)}>
          See {showMore ? "less" : "more"}
        </Button>
      </div>
    </div>
  );
};

export default AboutGrid;
