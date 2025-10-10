import React, { useContext } from "react";
import CountContext from "../contexts/countContext";
// import { countContext } from "../App";

export default function Counter() {
  const { counter, setCounter } = useContext(CountContext);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}
