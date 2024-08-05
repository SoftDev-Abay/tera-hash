import React from "react";
import Button from "@/app/components/Button/Button";
import SlideReveal from "@/app/components/SlideReveal/SlideReveal";

import "./style.scss";
import Image from "next/image";
const Tips = () => {
  const delay = 0.25;

  return (
    <div className="tips-wrapper">
      <div className="tip-container">
        <div className="text-container">
          <div className="title">Lootboxes</div>

          <SlideReveal delay={delay}>
            <div className="description">
              <p className="paragraph1">
                Earn cool bonuses and prizes {/* <br /> */}
                by buying them for $HASH
              </p>
              <p className="paragraph2">
                There might be upgrades for your mining farm, temporary boost or
              </p>
            </div>
          </SlideReveal>
        </div>
        <Image
          src="/imgs/about-section/referral-bonus.png"
          alt=""
          width={175}
          height={175}
        />
      </div>
      <div className="tip-container">
        <div className="text-container">
          <div className="title">In-game store</div>

          <SlideReveal delay={delay * 2}>
            <div className="description">
              <p className="paragraph1">
                Purchase various items and earn. But how come?
              </p>
              <p className="paragraph2">
                <span className="bold-yellow">
                  A portion of the total revenue from the store will be
                  distributed among the most active players
                </span>
              </p>
            </div>
          </SlideReveal>
        </div>
        <Button>play hashcats now</Button>
        <Image
          src="/imgs/summary-section/tiny-shop.png"
          alt=""
          width={175}
          height={175}
        />
      </div>
      <div className="bottom-button-wrapper">
        <Button>play hashcats now</Button>
      </div>
    </div>
  );
};

export default Tips;
