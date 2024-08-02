import CatPawIcon from "@/app/icons/CatPawIcon";

import { inView, useInView } from "framer-motion";

import "./style.scss";
import { useEffect, useRef, useState } from "react";

interface ProgressBarProps {
  bgcolor: string;
  completed: number;
}

const ProgressBar = ({ bgcolor, completed }: ProgressBarProps) => {
  const [stateCompleted, setStateCompleted] = useState(0);

  const ref = useRef(null); // Reference to the container div
  const isInView = useInView(ref, { once: true }); // Monitor the visibility

  useEffect(() => {
    if (isInView) {
      setStateCompleted(completed); // Set the width when in view
    }
  }, [isInView]);

  return (
    <div className="progress-bar" ref={ref}>
      <div
        className="filler"
        style={{
          width: `${stateCompleted}%`,
        }}
      >
        <div className="inner"></div>

        <CatPawIcon className="pointer" />
      </div>
    </div>
  );
};

export default ProgressBar;
