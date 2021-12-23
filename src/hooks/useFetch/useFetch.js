import { useCallback } from "react";
import { useAsync } from "../useAsync/useAsync";
const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" }
};
const options = {};
export const useFetch = (url) => {
  //use async expects a function that returns a promise
  const fetchData = async () => {
    let data;
    try {
      const result = await fetch(url, { ...DEFAULT_OPTIONS, ...options });

      if (!result.ok) {
        throw new Error("errore :(");
      }

      data = await result.json();
    } catch (e) {
      throw e;
    }
    return data;
  };

  const memoizedFetch = useCallback(fetchData, [url]);

  const { loading, error, value } = useAsync(memoizedFetch);

  return { loading, error, value };
};
