import React, { FC, HTMLAttributes } from "react";

import { IconProps } from "../constants/IconTypes";

const MenuIcon = ({ className = "", width = 46, height = 28 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22 20"
      fill="none"
    >
      <path
        d="M1 3.75H21"
        stroke="white"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M1 10H21"
        stroke="white"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M1 16.25H21"
        stroke="white"
        stroke-width="1.25"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default MenuIcon;
