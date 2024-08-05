import React from "react";
import Board from "@/app/components/Board/Board";
import "./style.scss";
import Button from "@/app/components/Button/Button";
import SlideReveal from "@/app/components/SlideReveal/SlideReveal";
import { gameURL } from "@/app/assets/Navigation";

const StorySection = () => {
  return (
    <div
      className="padding-wrapper container-max-width-1920 story-section"
      id="about"
    >
      <img
        className="elipsis azure-elipsis"
        src="/ellipses/azure-ellipse.png"
      />
      <img
        className="elipsis yellow-elipsis"
        src="/ellipses/yellow-ellipse.png"
      />
      <img
        className="elipsis purple-elipsis"
        src="/ellipses/purple-ellipse.png"
      />
      <div className="future">
        <img
          className="building-img"
          src="/imgs/story-section/story-section-buildings.png"
        />
        <div className="main">
          <div className="text-container">
            <div className="title">In the purrfect future...</div>

            <SlideReveal>
              <div className="description">
                сats have taken over as the ultimate rulers. These brilliant
                engineers and strategic masterminds claw their way to{" "}
                <span className="bold-yellow">
                  power by cryptocurrency mining
                </span>
              </div>
            </SlideReveal>
          </div>
          <video width="100%" height="100%" autoPlay muted loop playsInline>
            <source src="/videos/hash-cats-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="mining">
        <Board>
          <div className="old-computer-img-wrapper">
            <div className="img-container">
              <img src="/imgs/story-section/old-pc.png" alt="" />
            </div>
          </div>
          <div className="arrow-img-wrapper">
            <div className="img-container">
              <img src="/imgs/story-section/3d-arrow.png" alt="" />
            </div>
          </div>
          <div className="boxes-img-wrapper">
            <div className="img-container">
              <img src="/imgs/story-section/stacked-boxes.png" alt="" />
            </div>
          </div>
        </Board>
        <div className="text-container">
          <div className="title">You’ve discovered...</div>
          <div className="description">
            <SlideReveal delay={0.25}>
              <p className="paragraph1">
                an abandoned mining machine.
                <br /> Now your mission is to{" "}
                <span className="bold-yellow">
                  rise to the top by mastering crypto mining
                </span>
              </p>
            </SlideReveal>

            <SlideReveal delay={0.5}>
              <p className="paragraph2">
                Upgrade your equipment,
                <br /> expand your empire and become
                <br />
                <span className="bold-yellow">the HASH KING</span>
              </p>
            </SlideReveal>
          </div>
          <a
            className="action-button"
            href={gameURL}
            target="_blank"
            rel="noreferrer"
          >
            <Button widthFull>start now</Button>
          </a>
        </div>
      </div>

      <a
        className="action-button-bottom"
        href={gameURL}
        target="_blank"
        rel="noreferrer"
      >
        <Button widthFull>start now</Button>
      </a>
    </div>
  );
};

export default StorySection;
