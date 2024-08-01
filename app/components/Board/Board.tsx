import React from "react";
import "./style.scss";

// should have all divs props and children
interface BoardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Board = ({ children, ...rest }: BoardProps) => {
  return (
    <div {...rest} className={`board ${rest.className}`}>
      {children ? children : null}
    </div>
  );
};

export default Board;
