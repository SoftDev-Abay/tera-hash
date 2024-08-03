import React from "react";

import { socialIcons } from "@/app/assets/Navigation";

import "./style.scss";

const CallToAction = () => {
  return (
    <div className="call-to-action-box">
      <div className="header">Connect with Purrfect Future</div>
      <div className="subtext">
        Stay tuned for the latest updates and more. Join us on:
      </div>
      <div className="social-icons">
        {socialIcons.map((icon, index) => (
          <a
            key={index}
            href={icon.link}
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            {icon.icon}
          </a>
        ))}
      </div>

      <img
        className="img-right"
        src="/imgs/summary-section/crypto-mining-device.png"
        alt="crypto-mining-device"
      />
    </div>
  );
};

export default CallToAction;
