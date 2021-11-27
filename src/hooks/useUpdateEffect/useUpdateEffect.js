import { useRef, useEffect } from "react";
export function useUpdateEffect(callback, dependency) {
  const isRenderedRef = useRef(true);
  useEffect(() => {
    if (isRenderedRef.current) {
      isRenderedRef.current = false;
      return;
    }
    return callback;
  }, dependency);
}
