import React, { useEffect, useState } from "react";

export default function DisableBtn() {
  const [disable, setDisable] = useState(true);
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (click) {
      setTimeout(() => {
        setDisable(false);
        setClick(false);
      }, 3000);
    }
    // return () => clearTimeout(timer);
  }, [click]);
  function clickTimer() {
    setClick(true);
  }

  return (
    <div>
      {disable && (
        <div
          style={{
            background: "yellow",
            color: "black",
            padding: "5px",
            width: "200px",
            height: "100px",
          }}
        >
          <center style={{ marginTop: "5px" }}>
            <h1>3s</h1>
          </center>
        </div>
      )}
      <br />
      <br />
      <button onClick={clickTimer} style={{ marginLeft: "60px" }}>
        Click Me
      </button>
    </div>
  );
}
