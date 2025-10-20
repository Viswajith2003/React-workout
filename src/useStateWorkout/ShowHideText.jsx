import React, { useState } from "react";

export default function ShowHideText() {
  const [isvisible, setIsVisible] = useState(false);
  const [text, setText] = useState("Show");

  const clicked = () => {
    setIsVisible((prev) => !prev);
    // setIsVisible((prev) => (prev === false ? true : false));
    setText((prev) => (prev === "Show" ? "Hide" : "Show"));
  };
  return (
    <div>
      <h1>Paragraph text controlled by buttons</h1>
      <button onClick={clicked}>{text}</button>
      {isvisible && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facere
          doloribus tempora ab consequuntur voluptatum excepturi, debitis eaque
          dolores cum, quas incidunt deleniti ad. Distinctio suscipit repellat
          qui soluta inventore.
        </p>
      )}
    </div>
  );
}
