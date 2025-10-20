import React, { useState } from "react";

export default function UpperLowerToggle() {
  const [text, setText] = useState("Viswajith Vp");
  const [btn, setBtn] = useState("Uppercase");
  const handleCase = () => {
    setText(
      text === text.toUpperCase() ? text.toLowerCase() : text.toUpperCase()
    );
    setBtn((prev) => (prev === "Uppercase" ? "Lowercase" : "Uppercase"));
  };
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleCase}>{btn}</button>
    </div>
  );
}
