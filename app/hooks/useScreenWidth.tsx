import React, { useState, useEffect } from "react";

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(1024);


  useEffect(() => { 
    setScreenWidth(window.innerWidth);
  }, []);


  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth;
};

export default useScreenWidth;
