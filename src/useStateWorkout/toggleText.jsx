import React, { useState } from "react";

export default function ToggleText() {
  const [text, setText] = useState("Hello");
  const [btn, setBtn] = useState("Toggle-to-World");

  const handleToggle = () => {
    // if (text==="Hello") {
    //   setText("World");
    // } else {
    //   setText("Hello");
    // }

    setText((prev) => (prev === "Hello" ? "World" : "Hello"));
    setBtn((prev) =>
      prev === "Toggle-to-World" ? "Toggle-to-Hello" : "Toggle-to-World"
    );
  };
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleToggle}>{btn}</button>
    </div>
  );
}
