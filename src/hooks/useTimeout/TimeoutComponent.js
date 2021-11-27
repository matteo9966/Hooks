import { useState } from "react";
import { useTimeout } from "./useTimeout";
export function TimeoutComponent() {
  const [counter, setCounter] = useState(10);

  const { reset } = useTimeout(() => {
    setCounter(0);
  }, 3000);

  return (
    <div style={{ margin: "auto" }}>
      <div style={{ padding: "1rem" }}>{counter}</div>
      <button
        onClick={() => {
          setCounter(10);
          reset();
        }}
      >
        Resetta Azzeramento
      </button>
    </div>
  );
}
