import React, { useContext, useState } from "react";
import ourContext from "../contexts/ourContext";
// import { countContext } from "../App";

export default function Counter() {
  const { counter, setCounter, label, showLabel } = useContext(ourContext);
  // const [label, showLabel] = useState(true);

  const handleShowLabel = (e) => {
    console.log(e.target.checked ? "showing" : "Not showing");
    showLabel(e.target.checked);
  };
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <br />
      <br />
      <input
        type="checkbox"
        name=""
        value="show context label"
        checked={label}
        onChange={handleShowLabel}
      />
      show context label
    </div>
  );
}
