import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

type VideoComponentProps = {
  src: string;
  type: string;
};

const VideoComponent: React.FC<VideoComponentProps> = ({ src, type }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { once: false });

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <video ref={videoRef} width="100%" height="100%" muted loop playsInline>
      <source src={src} type={type} />
    </video>
  );
};

export default VideoComponent;
