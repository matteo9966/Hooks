import { useEffect, useState } from "react";

export function useStorage(
  key,
  defaultValue,
  StorageObj = window.localStorage
) {
  const [value, setValue] = useState(() => {
    const jsonValue = StorageObj.getItem(key); //se c'e qualcosa nello storage imposta quello
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) {
      return StorageObj.removeItem(key);
    }

    StorageObj.setItem(key, JSON.stringify(value));
  }, [value, StorageObj, key]);

  function removeItem() {
    if (StorageObj.getItem(key)) {
      setValue(null);
    }
  }
  console.log(value, setValue, removeItem);
  return [value, setValue, removeItem];
}
