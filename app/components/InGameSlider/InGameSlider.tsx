import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./style.scss";
import ChevroletRightIcon from "@/app/icons/ChevroletRightIcon";
import ChevroletLeftIcon from "@/app/icons/ChevroletLeftIcon";
import { Navigation } from "swiper/modules";
import Image from "next/image";

interface Item {
  name: string;
  imgsURL: string[];
  description: string;
}

interface InGameSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  item: Item;
  uniqueKey: string;
  imgWidth?: number;
  imgHeight?: number;
}

const InGameSlider: React.FC<InGameSliderProps> = ({
  item: { name, imgsURL, description },
  className,
  uniqueKey,
  imgWidth,
  imgHeight,
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
    <div className={`${className ? className : ""}  in-game-slider `}>
      <div className="swiper-content-wrapper">
        <h3>{name}</h3>

        <div className="content">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            modules={[Navigation]}
            navigation={{
              nextEl: `.next-${uniqueKey}`,
              prevEl: `.prev-${uniqueKey}`,
            }}
          >
            {imgsURL.map((URL, index) => (
              <SwiperSlide key={URL + index}>
                <Image
                  src={URL}
                  alt={URL}
                  width={imgWidth}
                  height={imgHeight}
                  style={{
                    width: imgWidth ? `${imgWidth}px` : "100%",
                    height: imgHeight ? `${imgHeight}px` : "100%",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <p>{description}</p>
        </div>
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
