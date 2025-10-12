import { useState } from "react";
import ourContext from "../contexts/ourContext";

export default function ContextProvider({ children }) {
  const [counter, setCounter] = useState(0);
  const [label, showLabel] = useState(false);
  return (
    <ourContext.Provider value={{ counter, setCounter, label, showLabel }}>
      {children}
    </ourContext.Provider>
  );
}
