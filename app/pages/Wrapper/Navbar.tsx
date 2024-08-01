import React from "react";
import "./style.scss";
import Image from "next/image";
import MenuIcon from "../../icons/MenuIcon";
import Modal from "@/app/components/Modal/Modal";
import RootModalContent from "./RootModalContent";
import { navigationLinks, socialIcons } from "@/app/assets/Navigation";
const Navbar = () => {
  const [isShow, setIsShow] = React.useState(false);

  const handleClose = () => {
    setIsShow(false);
  };

  const handleOpen = () => {
    setIsShow(true);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Image src="/logo.png" alt="Logo" priority width="102" height="67" />
        </div>
        <div className="navigation">
          {navigationLinks.map((link) => (
            <a href={link.link}>{link.name}</a>
          ))}
        </div>

        <div className="social-icons">
          {socialIcons.map((icon) => (
            <a href={icon.link}>{icon.icon}</a>
          ))}
        </div>

        <div className="menu-wrapper" onClick={handleOpen}>
          <MenuIcon />
        </div>
      </div>
      <Modal isShow={isShow} handleClose={handleClose}>
        <RootModalContent />
      </Modal>
    </>
  );
};

export default Navbar;
