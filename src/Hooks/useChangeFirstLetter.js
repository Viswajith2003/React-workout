import React, { useState } from "react";

export default function useChangeFirstLetter(inputStr = "") {
  const [changeName, setChangeName] = useState(inputStr);

  function firstLetterChange() {
    if(!changeName) return;
    let updateText = changeName.charAt(0).toUpperCase() + changeName.slice(1);
    console.log(updateText);
    setChangeName(updateText);
  }

  return { changeName, firstLetterChange };
}
