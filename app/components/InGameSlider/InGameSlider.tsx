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
  uniqueKey: string;
}

const InGameSlider: React.FC<InGameSliderProps> = ({
  items,
  className,
  uniqueKey,
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

  console.log("Swiper uniqueKey", uniqueKey);

  return (
    <div className={`${className ? className : ""}  in-game-slider`}>
      <div className="swiper-content-wrapper">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            nextEl: `.next-${uniqueKey}`,
            prevEl: `.prev-${uniqueKey}`,
          }}
        >
          {items.map(({ imgURL, name, description }, index) => (
            <SwiperSlide key={imgURL + index}>
              <h3>{name}</h3>
              <div className="content">
                <img src={imgURL} alt={name} />
                <p>{description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={`custom-swiper-button custom-swiper-button-prev ${
            isBeginning ? "disabled" : ""
          }  prev-${uniqueKey} `}
        >
          <ChevroletLeftIcon width={35} height={35} />
        </div>
        <div
          className={`custom-swiper-button custom-swiper-button-next ${
            isEnd ? "disabled" : ""
          } next-${uniqueKey}`}
        >
          <ChevroletRightIcon width={35} height={35} />
        </div>
      </div>
    </div>
  );
};

export default InGameSlider;
