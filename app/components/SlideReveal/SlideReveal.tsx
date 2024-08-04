import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface SlideRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  offset?: number;
}

const SlideReveal = ({
  children,
  delay = 0.25,
  duration = 0.5,
  offset = 75,
}: SlideRevealProps) => {
  const ref = useRef(null);
  //   const inView = useInView(ref, { once: false });
  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView]);
  return (
    <div ref={ref} style={{ position: "relative", zIndex: 100 }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -offset },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ delay, duration }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SlideReveal;
