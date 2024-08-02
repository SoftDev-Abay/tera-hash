import React from "react";
import "./style.scss";
import CatPawIcon from "@/app/icons/CatPawIcon";
import ProgressBar from "@/app/components/ProgressBar/ProgressBar";
// const ProgressBar = () => {
//   return (
//     <div className="progress-bar">
//       <div className="progress-bar-wrapper">
//         <div className="progress-bar-inner"></div>
//       </div>
//     </div>
//   );
// };

const Roadmap = () => {
  return (
    <div className="container-max-width-1920 roadmap-wrapper">
      <div className="header">Roadmap</div>
      <div className="main">
        <img
          className="left-cat-img"
          src="/imgs/summary-section/roadmap-cat-right.png"
          alt=""
        />
        <div className="info">
          <div className="text-panel text-panel-check text-panel-icon-end">
            <p>Pre Launch</p>
            <div className="icon-img-wrapper check-icon-img-wrapper">
              <img
                src="/imgs/summary-section/blue-check-mark.png"
                width={26}
                height={26}
              />
            </div>
          </div>
          <div className="text-panel text-panel-check text-panel-icon-end">
            <p>1,000,000 Users</p>
            <div className="icon-img-wrapper check-icon-img-wrapper">
              <img
                src="/imgs/summary-section/blue-check-mark.png"
                width={26}
                height={26}
              />
            </div>
          </div>
          <div className="text-panel-progress-bar-wrapper">
            <div className="text-panel text-panel-progress-bar">
              <p>Official HashCats Launch</p>
              <ProgressBar bgcolor="black" completed={35} />
            </div>

            <img
              src="/imgs/summary-section/plug-left.svg"
              className="plug-left-img"
            />
            <img
              src="/imgs/summary-section/plug-right.svg"
              className="plug-right-img"
            />
          </div>

          <div className="text-panel">
            <p>Pre Launch</p>
          </div>
          <div className="text-panel">
            <p>Shop Opening</p>
          </div>
          <div className="text-panel text-panel-icon-start text-panel-ruby">
            <img
              width={26}
              height={26}
              src="/imgs/summary-section/ruby-crystal-coin.png"
              className="check-icon"
            />
            <p>Exchange Negotiations</p>
          </div>
          <div className="text-panel">
            <p>Listing on Exchanges</p>
          </div>
        </div>
        <img
          className="right-cat-img"
          src="/imgs/summary-section/roadmap-cat-left.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Roadmap;
