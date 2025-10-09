import { useState } from "react";
import CountContext from "../contexts/countContext";

export default function countProvider({ childern }) {
  const [counter, setCounter] = useState(0);
  return (
    <CountContext.Provider value={{ counter, setCounter }}>
      {childern}
    </CountContext.Provider>
  );
}
