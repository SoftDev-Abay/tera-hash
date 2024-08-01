import React from "react";
import Board from "@/app/components/Board/Board";
import "./style.scss";

const StorySection = () => {
  return (
    <div className="padding-wrapper container-max-width-1920 story-section">
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
          <div className="board-content">
            {/* <img src="/imgs/story-section/story-mining.png" alt="" /> */}
            <img
              className="old-computer-img"
              src="/imgs/story-section/old-pc.png"
              alt=""
            />
            <img
              className="arrow-img"
              src="/imgs/story-section/3d-arrow.png"
              alt=""
            />
            <img
              className="boxes-img"
              src="/imgs/story-section/stacked-boxes.png"
              alt=""
            />
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
          <div className="action-button"></div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
