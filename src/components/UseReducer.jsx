import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "blue":
      return { ...state, color: "blue" };
    case "yellow":
      return { ...state, color: "yellow" };
    default:
      return state;
  }
}
export default function UseReducerHooks() {
  const [state, dispatch] = useReducer(reducer, { count: 0, color: "black" });
  //   const [color, setColor] = useState("white");

  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <div style={{ background: state.color }}>
          <h2>Counter: {state.count}</h2>
        </div>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "blue" })}>Blue</button>
        <button onClick={() => dispatch({ type: "yellow" })}>yellow</button>
      </div>
    </div>
  );
}
