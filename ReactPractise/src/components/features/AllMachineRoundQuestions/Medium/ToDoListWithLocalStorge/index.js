import React, { useEffect, useState } from "react";

export const ToDoListUseLocalStorage = () => {
  const [name, setName] = useState("");
  const [formdata, setFormdata] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // Add a new item to the to-do list
  const handleAddItem = () => {
    const newItem = { name: name, completed: false };
    const updatedList = [...formdata, newItem];
    setFormdata(updatedList);
    localStorage.setItem("myToDoArray", JSON.stringify(updatedList));
    setName("");
  };

  // Remove an item from the to-do list
  const handleRemove = (data) => {
    const finalList = formdata.filter((item) => item.name !== data.name);
    localStorage.setItem("myToDoArray", JSON.stringify(finalList));
    setFormdata(finalList);
  };

  // Toggle completion status for an item
  const handleToggleComplete = (data) => {
    const updatedList = formdata.map((item) => {
      if (item.name === data.name) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setFormdata(updatedList);
    localStorage.setItem("myToDoArray", JSON.stringify(updatedList));
  };

  // Load the data from localStorage on component mount
  useEffect(() => {
    const storedList = localStorage.getItem("myToDoArray");
    if (storedList) {
      setFormdata(JSON.parse(storedList));
    }
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "40px", fontWeight: "600" }}>To-DO List</h1>
      <div
        style={{
          padding: "90px",
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter here"
          style={{ width: "400px", color: "#fff", height: "50px", padding: "10px" }}
        />
        <button
          onClick={handleAddItem}
          style={{
            width: "250px",
            height: "50px",
            border: "1px solid #fff",
            borderRadius: "50px",
            cursor: "pointer",
          }}
        >
          Add Item
        </button>
      </div>
      <div
        style={{
          marginTop: "20px",
          border: "1px solid #fff",
          borderRadius: "10px",
          height: "90vh",
          width: "400px",
          marginLeft: "40%",
          padding: "20px",
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        <h3 style={{ fontSize: "20px", fontWeight: "500" }}>Your To-Do Items:</h3>
        <ul>
          {formdata.map((item, index) => (
            <div key={index} style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleToggleComplete(item)}
              />
              <li style={{ textDecoration: item.completed ? "line-through" : "none" }}>
                {item.name}
              </li>
              <button
                onClick={() => handleRemove(item)}
                style={{
                  width: "70px",
                  height: "20px",
                  border: "1px solid #fff",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
