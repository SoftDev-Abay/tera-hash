import React from "react";
import { IconProps } from "../constants/IconTypes";
const ChevroletLeftIcon = ({
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
        d="M21.7682 8.96355L10.3862 17.5L21.7682 26.0364"
        stroke="white"
        stroke-width="2.84548"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ChevroletLeftIcon;
