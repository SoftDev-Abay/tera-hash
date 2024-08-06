import React from "react";
import Link from "next/link";
import "./style.scss";
import Button from "@/app/components/Button/Button";

import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import CloseIcon from "@/app/icons/CloseIcon";
import { navigationLinks, socialIcons } from "@/app/assets/Navigation";
const RootModalContent = ({ handleClose }: { handleClose: Function }) => {
  const router = useRouter();

  return (
    <div className="root-modal-content">
      <div className="root-modal-navigation">
        {navigationLinks.map((link) => (
          <a
            onClick={() => {
              handleClose();
              router.push(link.link);
            }}
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="root-modal-social-icons">
        {socialIcons.map((icon) => (
          <a href={icon.link}>{icon.icon}</a>
        ))}
      </div>

      <p className="copyright">HashCats 2024. All Rights Reserved.</p>
    </div>
  );
};

export default RootModalContent;
