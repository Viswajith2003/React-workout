import React, { useState } from "react";

export default function AddRemoveItem() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addItem = () => {
    if (!text) return;
    setItems([...items, text]);
    setText("");
  };

  const deleteItem = (ClickedValue) => {
    setItems(items.filter((item) => item !== ClickedValue));
  };

  // items = ["apple", "banana", "mango"];
  // ClickedValue = "banana"; // the item you clicked to delete

  // Is "apple" not equal to "banana"? ✅ (keep it)
  // Is "banana" not equal to "banana"? ❌ (remove it)
  // Is "mango" not equal to "banana"? ✅ (keep it)

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
            {item} <button onClick={() => deleteItem(item)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
