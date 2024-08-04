import React from "react";

import { IconProps } from "../constants/IconTypes";

const CloseIcon = ({ className = "", width = 32, height = 32 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M12.7124 5.7876L5.28778 13.2122"
        stroke="#171717"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.7124 13.2122L5.28778 5.78754"
        stroke="#171717"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
