import { useEffect, useState } from "react";

const useRize = () => {
  const [windowWH, setWindowWH] = useState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
  });
  const onResize = () => {
    setWindowWH({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return windowWH;
};

export default useRize;
