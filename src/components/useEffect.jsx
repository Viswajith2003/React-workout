import React, { useEffect, useState } from "react";

export default function UseEffect() {
  // example 1
  //   const data = {
  //     Kerala: "Thiruvananthapuram",
  //     TamilNadu: "Chennai",
  //     Karnadaka: "Banglure",
  //   };

  //   const [selectItem, setSelectItem] = useState("Kerala");
  //   const [selectCapital, setSelectedCapital] = useState("Thiruvananthapuram");

  //   function changeState(e) {
  //     setSelectItem(e.target.value);
  //   }

  // //   const changeCapital = () => {
  // //     setSelectedCapital(data[selectItem]);
  // //   };

  //   //   useEffect(changeCapital, [selectItem]);

  //   useEffect(() => {
  //     setSelectedCapital(data[selectItem]);
  //   }, [selectItem]);

  // example 2

  const [count, setCount] = useState(0);
  const [boom, setBoom] = useState(false);

  useEffect(() => {
    setBoom(false);
    const id = setTimeout(() => {
      setBoom(true);
    }, count * 1000);
    return () => {
      // console.log("clean up" + count);
      clearTimeout(id);
    };
  }, [count]);

  

  return (
    <div>
      {/* <select onChange={changeState}>
        <option value="Kerala"> Kerala</option>
        <option value="TamilNadu">TamilNadu</option>
        <option value="Karnadaka">Karnadaka</option>
      </select>

      <h3>Your selected item is: {selectItem}</h3>
      <p>Captal of selected Item is: {selectCapital}</p> */}

      <div>
        <button
          onClick={() => setCount((count) => count + 1)}
          style={{ padding: "12px" }}
        >
          +
        </button>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
          style={{ padding: "12px" }}
        >
          -
        </button>

        {boom && count ? (
          <div
            style={{
              padding: "10px",
              background: "yellow",
              color: "black",
              width: "100px",
            }}
          >
            <h2>Boom</h2>
          </div>
        ) : null}
      </div>
    </div>
  );
}
