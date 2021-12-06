import "./styles.css";
// import { TimeoutComponent } from "./hooks/useTimeout/TimeoutComponent";
import { useEffect, useCallback } from "react";
import { DebounceComponent } from "./hooks/useDebounce/DebounceComponent";
export default function App() {
  const map = new Map();

  map.set("dep1", { A: "ciao" });
  map.set("dep2", { A: "dep2" });

  const dependencyFunction = useCallback(() => {
    let depArray = [];
    map.forEach((el) => depArray.push(el.A));
    return depArray;
  }, [map]);

  let dependencyArray = dependencyFunction();

  useEffect(() => {}, dependencyArray); //non va bene!

  // console.log(dependencyFunction())

  return (
    <div className="App">
      <h1>Custom Hooks!!</h1>
      {/* <TimeoutComponent /> */}
      <DebounceComponent />
    </div>
  );
}
