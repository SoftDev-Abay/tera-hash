import React from "react";
import { IconProps } from "../constants/IconTypes";
const ChevroletRightIcon = ({
  className = "",
  width = 35,
  height = 35,
  fill = "white",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 35 35"
      fill="none"
    >
      <path
        d="M13.2316 8.96355L24.6135 17.5L13.2316 26.0364"
        stroke={fill}
        stroke-width="2.84548"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ChevroletRightIcon;
