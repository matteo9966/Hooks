import { useTimeout } from "../useTimeout/useTimeout";
import { useEffect } from "react";

export function useDebounce(callback, delay, dependency) {
  const { reset, clear } = useTimeout(callback, delay);

  //this hook works with only 1 dependency. use A spread operator [...dependency] if you want to pass more than one dependency

  useEffect(() => {
    reset();
    return clear;
  }, [dependency, clear, reset]);
}
