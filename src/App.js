import "./styles.css";
import React from "react";
// import { TimeoutComponent } from "./hooks/useTimeout/TimeoutComponent";
// import { DebounceComponent } from "./hooks/useDebounce/DebounceComponent";
import { UpdateEffectComponent } from "./hooks/useUpdateEffect/UpdateEffectComponent";
export default function App() {
  // const setState = React.useState()[1];

  return (
    <div className="App">
      <h1>Custom Hooks!!</h1>
      {/* <button onClick={setState}>setstate</button> */}
      {/* <TimeoutComponent /> */}
      {/* <DebounceComponent /> */}
      <UpdateEffectComponent />
      {console.log("rendering---")}
    </div>
  );
}
