import React from "react";
import { IconProps } from "../constants/IconTypes";
const BlueCheckMark = ({
  className = "",
  width = 63,
  height = 63,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 63 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g filter="url(#filter0_d_540_243)">
        <rect
          x="18.77"
          y="18.7185"
          width="25.6092"
          height="25.6092"
          fill="url(#pattern0_540_243)"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_540_243"
          x="0.363411"
          y="0.311897"
          width="62.4223"
          height="62.4223"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="9.2033" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0.82 0 0 0 0 1 0 0 0 0.7 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_540_243"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_540_243"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0_540_243"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_540_243" transform="scale(0.0153846)" />
        </pattern>
        <image
          id="image0_540_243"
          width="65"
          height="65"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAACXBIWXMAACxLAAAsSwGlPZapAAAE8GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYTZhNjM5NiwgMjAyNC8wMy8xMi0wNzo0ODoyMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjExIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMDctMjZUMjM6NTQ6MzkrMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTA3LTI2VDIzOjU1OjA3KzA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTA3LTI2VDIzOjU1OjA3KzA1OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNzMzMGVlNy1iNDllLWY0NDYtYjYwYi04NGM5ZjZhM2U5ZjgiIHhtcE1NOkRvY3VtZW50SUQ9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"
        />
      </defs>
    </svg>
  );
};

export default BlueCheckMark;
