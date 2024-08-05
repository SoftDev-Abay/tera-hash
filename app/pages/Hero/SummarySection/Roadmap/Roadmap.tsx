import React, { useEffect, useRef } from "react";
import "./style.scss";
import CatPawIcon from "@/app/icons/CatPawIcon";
import ProgressBar from "@/app/components/ProgressBar/ProgressBar";

import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  started?: boolean;
}

const Reveal = ({
  children,
  delay = 0.25,
  duration = 0.5,
  started,
}: RevealProps) => {
  const ref = useRef(null);
  const mainControls = useAnimation();

  useEffect(() => {
    if (started) {
      mainControls.start("visible");
    }
  }, [started]);

  return (
    <div ref={ref} style={{ position: "relative", zIndex: 100 }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ delay, duration }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Roadmap = () => {
  const initialDelay = 0.25;

  const calculateDelay = (index: number) => {
    return initialDelay + index * 0.25;
  };

  const firstItemRef = useRef(null);
  const inView = useInView(firstItemRef, { once: false });

  return (
    <div className="container-max-width-1920 roadmap-wrapper" id="roadmap">
      <div className="header">Roadmap</div>
      <div className="main">
        <Image
          className="left-cat-img"
          src="/imgs/summary-section/roadmap-cat-right.png"
          alt=""
          width={333}
          height={540}
        />
        <div className="info">
          <div className="text-panel text-panel-check text-panel-icon-end">
            <Reveal started={inView} delay={calculateDelay(0)}>
              <p ref={firstItemRef}>Pre Launch</p>
            </Reveal>
            <div className="icon-img-wrapper check-icon-img-wrapper">
              <Image
                src="/imgs/summary-section/blue-check-mark.png"
                alt=""
                width={26}
                height={26}
              />
            </div>
          </div>
          <div className="text-panel text-panel-check text-panel-icon-end">
            <Reveal started={inView} delay={calculateDelay(1)}>
              <p>1,000,000 Users</p>
            </Reveal>
            <div className="icon-img-wrapper check-icon-img-wrapper">
              <Image
                src="/imgs/summary-section/blue-check-mark.png"
                alt=""
                width={26}
                height={26}
              />
            </div>
          </div>
          <div className="text-panel-progress-bar-wrapper">
            <div className="text-panel text-panel-progress-bar">
              <Reveal started={inView} delay={calculateDelay(2)}>
                <p>Official HashCats Launch</p>
              </Reveal>
              <ProgressBar bgcolor="black" completed={35} />
            </div>

            <Image
              src="/imgs/summary-section/plug-left.svg"
              className="plug-left-img"
              width={128}
              height={80}
              alt=""
            />
            <Image
              src="/imgs/summary-section/plug-right.svg"
              className="plug-right-img"
              width={108}
              height={52}
              alt=""
            />
          </div>

          <div className="text-panel">
            <Reveal started={inView} delay={calculateDelay(3)}>
              <p>Shop Opening</p>
            </Reveal>
          </div>
          <div className="text-panel">
            <Reveal started={inView} delay={calculateDelay(4)}>
              <p>Exchange Negotiations</p>
            </Reveal>
          </div>
          <div className="text-panel text-panel-icon-start text-panel-ruby">
            <Image
              width={26}
              height={26}
              alt=""
              src="/imgs/summary-section/ruby-crystal-coin.png"
              className="check-icon"
            />
            <Reveal started={inView} delay={calculateDelay(5)}>
              <p>Airdrop</p>
            </Reveal>
          </div>
          <div className="text-panel">
            <Reveal started={inView} delay={calculateDelay(6)}>
              <p>Listing on Exchanges</p>
            </Reveal>
          </div>
        </div>
        <Image
          className="right-cat-img"
          src="/imgs/summary-section/roadmap-cat-left.png"
          alt=""
          width={333}
          height={540}
        />
      </div>
    </div>
  );
};

export default Roadmap;
