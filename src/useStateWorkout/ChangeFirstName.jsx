import React from "react";
import useChangeFirstLetter from "../Hooks/useChangeFirstLetter";

export default function ChangeFirstName() {
  const { changeName, firstLetterChange } = useChangeFirstLetter("viswajith");

  return (
    <div>
      <h1>{changeName}</h1>
      <button onClick={firstLetterChange}>Click me</button>
    </div>
  );
}
