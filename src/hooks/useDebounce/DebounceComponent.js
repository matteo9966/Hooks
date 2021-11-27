import { useState } from "react";
import { useDebounce } from "./useDebounce";
export function DebounceComponent() {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");
  function debouncedFunction() {
    setMessage("hai cliccato: " + counter + " volte");
  }
  useDebounce(debouncedFunction, 2000, counter);

  return (
    <div style={{ margin: "auto" }}>
      <p>{message}</p>
      <button onClick={() => setCounter((c) => c + 1)}>
        incrementaContatore {" " + counter}
      </button>
    </div>
  );
}
