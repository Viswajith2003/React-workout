import React, { useState } from "react";

export default function AddRemoveItem() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addItem = () => {
    setItems([...items, text]);
    setText("");
  };

  const deleteItem=()=>{
    
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Text something.."
        onChange={handleChange}
        value={text}
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item) => (
          <li>
            {item} {" "}
            <button onClick={deleteItem}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
