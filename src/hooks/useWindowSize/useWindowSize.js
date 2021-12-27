import { useState } from "react";
// import { useDebounce } from "../useDebounce/useDebounce";
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // useDebounce(updateSizes, 1000, windowSize);

  function updateSizes() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  window.onresize = () => {
    updateSizes();
  };

  return windowSize;
};

export default useWindowSize;
