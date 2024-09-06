import React, { useState } from "react";

export const ToDoListComponent = () => {
  const [name, setName] = useState("");
  const [formdata, setFormdata] = useState([]);
  const handleChange = (e) => {
    console.log("Print handleChange", e.target.value);
    setName(e.target.value);
  };

  const handleAddItem = () => {
    setFormdata([...formdata, name]);
    setName("");
  };

  const handleRemove = (data) => {
    const finalList = formdata?.filter((item) => item != data);
    setFormdata(finalList);
  };

  console.log("Print this input value", formdata);
  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "40px", fontWeight: "600" }}>To-DO List </h1>
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
          onChange={(e) => handleChange(e)}
          placeholder="enter here "
          style={{ width: "400px", color: "#fff", height: "50px", padding: "10px" }}
        />
        <button
          onClick={() => handleAddItem()}
          style={{ width: "250px", height: "50px", border: "1px solid #fff", borderRadius: "50px" }}
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
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <h3 style={{ fontSize: "20px", fontWeight: "500" }}>Your To-Do Items:</h3>
        <ul>
          {formdata.map((item, index) => (
            <div key={index} style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
              <li>{item}</li>
              <button
                onClick={() => handleRemove(item)}
                style={{
                  width: "70px",
                  height: "20px",
                  border: "1px solid #fff",
                  borderRadius: "10px",
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
