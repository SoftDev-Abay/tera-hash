import React from "react";
import Board from "@/app/components/Board/Board";
import "./style.scss";
import Button from "@/app/components/Button/Button";

const StorySection = () => {
  return (
    <div className="padding-wrapper container-max-width-1920 story-section">
      {/* <img
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
      /> */}
      <div className="future">
        <img
          className="building-img"
          src="/imgs/story-section/story-section-buildings.png"
        />
        <div className="main">
          <div className="text-container">
            <div className="title">In the purrfect future...</div>
            <div className="description">
              сats have taken over as the ultimate rulers. These brilliant
              engineers and strategic masterminds claw their way to{" "}
              <span className="bold-yellow">
                power by cryptocurrency mining
              </span>
            </div>
          </div>
          <Board />
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
            <p className="paragraph1">
              an abandoned mining machine.
              <br />
              Now your mission is to{" "}
              <span className="bold-yellow">
                rise to the top by mastering crypto mining
              </span>
            </p>

            <p className="paragraph2">
              Upgrade your equipment,
              <br /> expand your empire and become
              <br />
              <span className="bold-yellow">the HASH KING</span>
            </p>
          </div>
          <div className="action-button">
            <Button widthFull>start now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
