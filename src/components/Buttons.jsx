// src/components/Buttons.js
import React from "react";

const Buttons = ({ onAdd, onRemove, onAddAll, onRemoveAll }) => {
  return (
    <div>
      <button onClick={onAdd}>Add</button>
      <button onClick={onRemove}>Remove</button>
      <button onClick={onAddAll}>Add All</button>
      <button onClick={onAddAll}>Add All</button>
      <button onClick={onRemoveAll}>Remove All</button>
    </div>
  );
};

export default Buttons;
