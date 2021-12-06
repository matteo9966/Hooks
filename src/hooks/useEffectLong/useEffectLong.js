import { useEffect, useCallback } from "react";

const map = new Map();

map.set("dep1", { A: "ciao" });
map.set("dep2", { A: "dep2" });

const dependencyFunction = () => {
  let depArray = [];
  map.forEach((el) => depArray.push(el.A));
  return depArray;
};

console.log(dependencyFunction());
