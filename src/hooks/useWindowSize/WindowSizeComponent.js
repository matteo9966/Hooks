import useWindowSize from "./useWindowSize";
import { useDebounce } from "../useDebounce/useDebounce";
import { useState } from "react";
export default function WindowSizeComponent() {
  const windowSize = useWindowSize();
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useDebounce(updateSizesOnScreenWithDebounce, 800, windowSize);

  function updateSizesOnScreenWithDebounce() {
    setWidth(windowSize.width);
    setHeight(windowSize.height);
  }

  return (
    <div>
      <span style={{ display: "block" }}>
        <p>width: {width}</p>
      </span>
      <span style={{ display: "block" }}>
        <p>height: {height}</p>
      </span>
    </div>
  );
}
