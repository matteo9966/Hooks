import "./styles.css";
// import { TimeoutComponent } from "./hooks/useTimeout/TimeoutComponent";
import { DebounceComponent } from "./hooks/useDebounce/DebounceComponent";
export default function App() {
  return (
    <div className="App">
      <h1>Custom Hooks!!</h1>
      {/* <TimeoutComponent /> */}
      <DebounceComponent />
    </div>
  );
}
