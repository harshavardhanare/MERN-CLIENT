import { useState } from "react";

export default function StoringArray() {
  const [items, setItems] = useState([]); // Use a more descriptive name for clarity

  function submitHandler() {
    if (state.trim() !== "") { // Check for empty input before adding
      setItems([...items, state]); // Spread syntax to create a new array
      setState(""); // Clear the input field after adding
    } else {
      alert("Please enter a number before submitting."); // Inform user about empty input
    }
  }

  function deleteHandler(index) {
    const updatedItems = [...items]; // Create a copy to avoid mutation
    updatedItems.splice(index, 1); // Remove the item at the specified index
    setItems(updatedItems);
  }

  const [state, setState] = useState(""); // State for user input

  return (
    <div>
      Enter number:
      <input
        value={state}
        type="text"
        name="number"
        onChange={(e) => setState(e.target.value)}
      />
      <button onClick={submitHandler}>Submit</button>
      <div>
        <p>
          {items.map((item, index) => (
            <p key={index}>
              {item}
              <button index={index} onClick={() => deleteHandler(index)}>
                Delete
              </button>
            </p>
          ))}
        </p>
      </div>
    </div>
  );
}
