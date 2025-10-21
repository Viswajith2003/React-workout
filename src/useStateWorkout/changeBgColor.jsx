import React, { useState } from "react";

export default function ChangeBgColor() {
  const [index, setIndex] = useState(0);
  let colors = ["red", "blue", "green", "purple"];
  const changeBgColor = () => {
    setIndex((prev) => (prev + 1) % colors.length);
  };
  return (
    <div>
      <div style={{ background: colors[index], padding: "3px" }}>
        <h1>Change Bg color</h1>
      </div>
      <br />
      <br />
      <button onClick={changeBgColor}>Switch Color</button>
    </div>
  );
}

// prev = 0
// (0 + 1) % 4 = 1
// ✅ So index becomes 1 → color is "blue".
