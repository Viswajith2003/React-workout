import React, { useContext, useState } from "react";
import { countContext } from "../App";

export default function Counter() {
  const { counter, setCounter } = useContext(countContext);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}
