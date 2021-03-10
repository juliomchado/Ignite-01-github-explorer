import { useState } from "react";

export function Counter() {
  const [counterValue, setCounterValue] = useState(0);

  function increment() {
    setCounterValue(counterValue + 1);
  }

  return (
    <div>
      <h2>{counterValue}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
