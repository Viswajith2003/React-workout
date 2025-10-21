// Count Characters — Display character count and Currenttext dynamically as text changes.

import React, { useState } from "react";

export default function TextCount() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [currentText, setCurrentText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleCount = () => {
    setCount(text.length);
  };
  const handleText = () => {
    setCurrentText(text);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the text"
        onChange={handleChange}
        value={text}
      />
      <br />
      <br />
      <button onClick={handleCount}>Get TextCount</button>
      <button onClick={handleText}>Get Text</button>
      <p>Text Count is : {count}</p>
      <p>Text is : {currentText}</p>
    </div>
  );
}
