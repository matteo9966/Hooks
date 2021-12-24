import { useEffect, useRef } from "react";
import isEqual from "lodash/fp/isEqual";

const useDeepCompareEffect = (callback, dependencies) => {
  const dependencyRef = useRef();

  useEffect(() => {
    if (!isEqual(dependencyRef.current, dependencies)) {
      dependencyRef.current = dependencies;
      callback();
    }
  }, [dependencies, callback]);
};
export default useDeepCompareEffect;
