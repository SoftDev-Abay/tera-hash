import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./style.scss";
import ChevroletRightIcon from "@/app/icons/ChevroletRightIcon";
import ChevroletLeftIcon from "@/app/icons/ChevroletLeftIcon";
import { Navigation } from "swiper/modules";

interface Item {
  name: string;
  imgURL: string;
  description: string;
}

interface InGameSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Item[];
}

const InGameSlider: React.FC<InGameSliderProps> = ({
  items,
  className,
  ...rest
}) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current;

    if (swiperInstance) {
      swiperInstance.on("reachBeginning", () => {
        setIsBeginning(true);
        setIsEnd(false);
      });

      swiperInstance.on("reachEnd", () => {
        setIsEnd(true);
        setIsBeginning(false);
      });

      swiperInstance.on("fromEdge", () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      });
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off("reachBeginning");
        swiperInstance.off("reachEnd");
        swiperInstance.off("fromEdge");
      }
    };
  }, []);

  return (
    <div className={`${className ? className : ""}  in-game-slider`}>
      <div className="swiper-content-wrapper">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
        >
          {items.map(({ imgURL, name, description }) => (
            <SwiperSlide key={imgURL}>
              <div className="shop-item-container">
                <h3>{name}</h3>
                <img src={imgURL} alt={name} />
                <p>{description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={`custom-swiper-button custom-swiper-button-prev ${
            isBeginning ? "disabled" : ""
          }`}
        >
          <ChevroletLeftIcon width={44} height={44} />
        </div>
        <div
          className={`custom-swiper-button custom-swiper-button-next ${
            isEnd ? "disabled" : ""
          }`}
        >
          <ChevroletRightIcon width={44} height={44} />
        </div>
      </div>
    </div>
  );
};

export default InGameSlider;
