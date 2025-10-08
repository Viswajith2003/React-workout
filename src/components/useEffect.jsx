import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const data = {
    Kerala: "Thiruvananthapuram",
    TamilNadu: "Chennai",
    Karnadaka: "Banglure",
  };

  const [selectItem, setSelectItem] = useState("Kerala");
  const [selectCapital, setSelectedCapital] = useState("Thiruvananthapuram");

  function changeState(e) {
    setSelectItem(e.target.value);
  }

//   const changeCapital = () => {
//     setSelectedCapital(data[selectItem]);
//   };

  //   useEffect(changeCapital, [selectItem]);
  
  useEffect(() => {
    setSelectedCapital(data[selectItem]);
  }, [selectItem]);

  return (
    <div>
      <select onChange={changeState}>
        <option value="Kerala"> Kerala</option>
        <option value="TamilNadu">TamilNadu</option>
        <option value="Karnadaka">Karnadaka</option>
      </select>

      <h3>Your selected item is: {selectItem}</h3>
      <p>Captal of selected Item is: {selectCapital}</p>
    </div>
  );
}
