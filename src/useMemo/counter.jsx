import React, { useState, memo } from "react";

// ✅ React.memo prevents unnecessary re-renders if props don't change
function CounterMemo() {
  const [count, setCount] = useState(0);

  console.log("Child rendering");

  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <h2>Child Component Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default memo(CounterMemo);
