import React from "react";
import "./style.scss";
import { navigationLinks, socialIcons } from "@/app/assets/Navigation";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <div className="navigation">
          {navigationLinks.map((link) => (
            <a href={link.link}>{link.name}</a>
          ))}
        </div>
        <div className="logo">
          <img src="/logo-full-width.png" alt="Logo" />
        </div>
      </div>
      <div className="right">
        <div className="social-icons">
          {socialIcons.map((icon) => (
            <a href={icon.link}>{icon.icon}</a>
          ))}
        </div>
        <div className="copyright"> HashCats 2024. All Rights Reserved. </div>
      </div>
    </div>
  );
};

export default Footer;
