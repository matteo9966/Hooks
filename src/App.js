import "./styles.css";
import { TimeoutComponent } from "./hooks/useTimeout/TimeoutComponent";
export default function App() {
  return (
    <div className="App">
      <h1>Custom Hooks!!</h1>
      <TimeoutComponent />
    </div>
  );
}
