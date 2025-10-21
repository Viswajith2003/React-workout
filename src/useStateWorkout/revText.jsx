import React, { useState } from "react";

export default function RevText() {
  const [text, setRevText] = useState("Viswajith");
  const [btn, setBtn] = useState("Reverse");

  const revStr = () => {
    let rev = text.split("").reverse().join("");
    // console.log(rev);
    setRevText(rev);
    setBtn((prev) => (prev === "Reverse" ? "Orginal" : "Reverse"));
  };
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={revStr}>{btn}</button>
    </div>
  );
}
