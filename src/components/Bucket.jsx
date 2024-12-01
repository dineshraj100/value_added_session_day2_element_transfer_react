// src/components/Bucket.js
import React from "react";

const Bucket = ({ title, items, selectedItems, onItemSelect }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            onClick={() => onItemSelect(item)}
            style={{
              cursor: "pointer",
              backgroundColor: selectedItems.includes(item)
                ? "#d3d3d3"
                : "white",
              padding: "5px",
              border: "1px solid #ccc",
              marginBottom: "5px",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bucket;
