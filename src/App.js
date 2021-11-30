import "./styles.css";
// import { TimeoutComponent } from "./hooks/useTimeout/TimeoutComponent";
import { DebounceComponent } from "./hooks/useDebounce/DebounceComponent";
import { StateWithHistoryComponent } from "./hooks/useStateWithHistory/StateWithHistoryComponent";

export default function App() {
  return (
    <div className="App">
      <h1>Custom Hooks!!</h1>
      {/* <TimeoutComponent /> */}
      {/* <DebounceComponent /> */}
      <StateWithHistoryComponent />
    </div>
  );
}
