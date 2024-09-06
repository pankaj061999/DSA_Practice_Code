import React, { useState } from "react";

export const FormSubmitComponent = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "mobile") setMobile(value);
    if (name === "email") setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation for form fields
    if (name.trim() === "" || mobile.trim() === "" || email.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Basic mobile number validation (example for 10-digit numbers)
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    // Handle form submission
    console.log({ name, mobile, email });
    alert("Form submitted successfully");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Form Submit Application</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <input
          type="text"
          name="mobile"
          value={mobile}
          onChange={handleChange}
          placeholder="Enter your mobile number"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
