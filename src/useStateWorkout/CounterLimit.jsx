import React from "react";
import useCounter from "../Hooks/useCounter";

export default function CounterLimit() {
  const [count, increment, decrement] = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
