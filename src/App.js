import "./styles.css";
import React from "react";
// import { TimeoutComponent } from "./hooks/useTimeout/TimeoutComponent";
// import { DebounceComponent } from "./hooks/useDebounce/DebounceComponent";
// import { StorageComponent } from "./hooks/useStorage/StorageComponent";
// import { AsyncComponent } from "./hooks/useAsync/AsyncComponent";
// import { FetchComponent } from "./hooks/useFetch/FetchComponent";
import WindowSizeComponent from "./hooks/useWindowSize/WindowSizeComponent";
// import DeepCompareEffectComponent from "./hooks/useDeepEffect/start/DeepCompareEffectComponent";
// import OnScreenComponent from "./hooks/useOnScreen/OnScreenComponent";
export default function App() {
  return (
    <div className="App">
      <h1>Custom Hooks!!</h1>
      {/* <TimeoutComponent /> */}
      {/* <DebounceComponent /> */}
      {/* <StorageComponent /> */}
      {/* <AsyncComponent /> */}
      {/* <FetchComponent /> */}
      {/* <DeepCompareEffectComponent /> */}
      {/* <OnScreenComponent /> */}
      <WindowSizeComponent />
    </div>
  );
}
