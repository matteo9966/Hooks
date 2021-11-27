import { useEffect, useRef, useCallback } from "react";

export const useTimeout = (callback, delay) => {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();
  //every time this hook is executed it stores the callback function in the ref

  useEffect(() => {
    if (callback) {
      callbackRef.current = callback;
    }
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  useEffect(() => {
    set();
    return clear;
  }, [set, clear]);

  return { reset, clear };
};
