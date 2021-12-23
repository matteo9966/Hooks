import { useCallback } from "react";
import { useAsync } from "./useAsync";

export function AsyncComponent() {
  const memoizedProm = useCallback(() => {
    return new Promise((resolve, reject) => {
      const success = false;
      setTimeout(() => {
        success ? resolve("Hi") : reject("Error");
      }, 1000);
    });
  }, []);

  const { loading, error, value } = useAsync(memoizedProm);

  return (
    <div>
      <div>Loading: {loading.toString()}</div>
      <div>{error}</div>
      <div>{value}</div>
    </div>
  );
}
