import React, { useEffect, useLayoutEffect, useRef } from "react";

export default function UseLayoutEffect() {
  const boxRef = useRef();

  useLayoutEffect(() => {
    // Runs before screen update
    boxRef.current.style.backgroundColor = "skyblue";
    boxRef.current.style.width = "200px";
  }, []);

  return (
    <div
      ref={boxRef}
      style={{ width: "50px", height: "50px", backgroundColor: "red" }}
    ></div>
  );
}
