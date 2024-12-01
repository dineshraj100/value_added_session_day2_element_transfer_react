// src/components/ElementTransfer.js
import React, { useState } from "react";
import Bucket from "./Bucket.jsx";
import Buttons from "./Buttons.jsx";

const ElementTransfer = () => {
  const [bucket1, setBucket1] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 5",
  ]);
  const [bucket2, setBucket2] = useState(["Item 4", "Item 6"]);
  const [selectedBucket1, setSelectedBucket1] = useState([]);
  const [selectedBucket2, setSelectedBucket2] = useState([]);

  const handleAdd = () => {
    const newBucket2 = [...bucket2, ...selectedBucket1];
    setBucket2(newBucket2);
    setBucket1(bucket1.filter((item) => !selectedBucket1.includes(item)));
    setSelectedBucket1([]);
  };

  const handleRemove = () => {
    const newBucket1 = [...bucket1, ...selectedBucket2];
    setBucket1(newBucket1);
    setBucket2(bucket2.filter((item) => !selectedBucket2.includes(item)));
    setSelectedBucket2([]);
  };

  const handleAddAll = () => {
    setBucket2([...bucket2, ...bucket1]);
    setBucket1([]);
    setSelectedBucket1([]);
  };

  const handleRemoveAll = () => {
    setBucket1([...bucket1, ...bucket2]);
    setBucket2([]);
    setSelectedBucket2([]);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
      }}
    >
      <Bucket
        title="Bucket 1"
        items={bucket1}
        selectedItems={selectedBucket1}
        onItemSelect={(item) =>
          setSelectedBucket1((prev) =>
            prev.includes(item)
              ? prev.filter((i) => i !== item)
              : [...prev, item]
          )
        }
      />
      <Buttons
        onAdd={handleAdd}
        onRemove={handleRemove}
        onAddAll={handleAddAll}
        onRemoveAll={handleRemoveAll}
      />
      <Bucket
        title="Bucket 2"
        items={bucket2}
        selectedItems={selectedBucket2}
        onItemSelect={(item) =>
          setSelectedBucket2((prev) =>
            prev.includes(item)
              ? prev.filter((i) => i !== item)
              : [...prev, item]
          )
        }
      />
    </div>
  );
};

export default ElementTransfer;
