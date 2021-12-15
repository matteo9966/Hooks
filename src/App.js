import "./styles.css";
import React from "react";
// import { TimeoutComponent } from "./hooks/useTimeout/TimeoutComponent";
// import { DebounceComponent } from "./hooks/useDebounce/DebounceComponent";
import { StorageComponent } from "./hooks/useStorage/StorageComponent";

export default function App() {
  return (
    <div className="App">
      <h1>Custom Hooks!!</h1>
      {/* <TimeoutComponent /> */}
      {/* <DebounceComponent /> */}
      <StorageComponent />
    </div>
  );
}
