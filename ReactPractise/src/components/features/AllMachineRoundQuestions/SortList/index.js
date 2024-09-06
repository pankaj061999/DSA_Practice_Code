import React, { useState } from "react";

export const SortStaticList = () => {
  const initialFruits = [
    { id: 0, name: "mango" },
    { id: 1, name: "Orange" },
    { id: 2, name: "Apple" },
    { id: 3, name: "Pineapple" },
    { id: 4, name: "Grapes" },
    { id: 5, name: "Banana" },
  ];

  const [listFruits, setListFruits] = useState(initialFruits);

  const handleSort = () => {
    const sortedFruits = [...listFruits].sort((a, b) => a.name.localeCompare(b.name));
    setListFruits(sortedFruits);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Static List Rendering</h1>
      <button
        onClick={handleSort}
        style={{
          display: "block",
          width: "200px",
          margin: "0 auto 20px auto",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
      >
        Sort List
      </button>
      <ul
        style={{
          listStyleType: "none",
          padding: "100px",
          margin: "0",
          width: "500px",
          height: "auto",
          alignItems: "center",
        }}
      >
        {listFruits.map((item) => (
          <li
            key={item.id}
            style={{
              backgroundColor: "#f9f9f9",
              border: "1px solid #ddd",
              borderRadius: "5px",
              padding: "10px",
              margin: "5px 0",
              fontSize: "16px",
              color: "#333",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s",
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
