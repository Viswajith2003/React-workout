import React, { useState } from "react";

export default function FindLongestWord() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const findLongWord = (str) => {
    // let longest = "";
    // let s = str.split(" ");
    // for (let word of s) {
    //   if (word.length > longest.length) {
    //     longest = word;
    //   }
    // }

    let longest = str
      .split(" ")
      .reduce((a, b) => (a.length > b.length ? a : b));
    setOutput(longest);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter something.."
        onChange={handleChange}
        value={text}
      />
      <button onClick={() => findLongWord(text)}>Get LongestWord</button>
      <p>{output}</p>
    </div>
  );
}
