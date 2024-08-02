import React from "react";
import "./style.scss";

type ButtonProps = {
  onClick?: Function;
  children: React.ReactNode;
  className?: string;
  styleType?: "primary" | "standart";
  illuminateShadow?: boolean;
  widthFull?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  onClick,
  children,
  className,
  styleType = "primary",
  illuminateShadow = false,
  widthFull = false,
  type = "button",

  ...rest
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn type-${styleType} ${
        illuminateShadow ? "illuminate-shadow" : ""
      }  ${className || ""}`}
      {...rest}
      style={{ width: widthFull ? "100%" : "auto" }}
    >
      {children}
    </button>
  );
};

export default Button;
