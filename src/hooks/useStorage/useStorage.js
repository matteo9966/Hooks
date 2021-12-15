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
// import { useCallback, useState, useEffect } from "react";

// export function useLocalStorage(key, defaultValue) {
//   return useStorage(key, defaultValue, window.localStorage);
// }

// export function useSessionStorage(key, defaultValue) {
//   return useStorage(key, defaultValue, window.sessionStorage);
// }

// function useStorage(key, defaultValue, storageObject) {
//   const [value, setValue] = useState(() => {
//     const jsonValue = storageObject.getItem(key);
//     if (jsonValue != null) return JSON.parse(jsonValue);

//     if (typeof defaultValue === "function") {
//       return defaultValue();
//     } else {
//       return defaultValue;
//     }
//   });

//   useEffect(() => {
//     if (value === undefined) return storageObject.removeItem(key);
//     storageObject.setItem(key, JSON.stringify(value));
//   }, [key, value, storageObject]);

//   const remove = useCallback(() => {
//     setValue(undefined);
//   }, []);

//   return [value, setValue, remove];
// }
