"use client";
import React, { useState } from "react";

export const SearchableDropdown = () => {
  const originalList = [
    { id: 0, title: "Pankaj Kumar Meena" },
    { id: 1, title: "Pankaj Kumar" },
    { id: 2, title: "Pankaj Meena" },
    { id: 3, title: "Arjun Meena" },
    { id: 4, title: "Roy Meena" },
    { id: 5, title: "Karan Meena" },
    { id: 6, title: "Ravi Meena" },
  ];
  const [nameList, setNameList] = useState(originalList);
  const [typeName, setTypeName] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setTypeName(value);

    if (value === "") {
      setNameList(originalList);
    } else {
      const filteredList = originalList.filter((item) => item.title.toLowerCase().includes(value));
      setNameList(filteredList);
    }
  };
  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <h1>Searchable Dropdown:</h1>
      <input value={typeName} onChange={(e) => handleChange(e)} placeholder="Enter here" />
      <ul style={{ display: "flex", flexDirection: "column", color: "red" }}>
        {nameList?.map((item, index) => {
          return <li key={index}>{item?.title}</li>;
        })}
      </ul>
    </div>
  );
};
