import { useState, useEffect, useCallback } from "react";
export const useAsync = (callback) => {
  //callback quando è chiamato è chiamato con bind

  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const callbackMemo = useCallback(async () => {
    setLoading(true);
    setError(null);
    setValue(null);
    try {
      const value = await callback();
      setValue(value);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  }, [callback]);

  useEffect(() => {
    callbackMemo();
  }, [callbackMemo]);
  return { loading, error, value };
};
