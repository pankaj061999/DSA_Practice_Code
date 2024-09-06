import { formConfig } from "@/utils/config";
import React, { useState } from "react";

export const DynmicFormUsingConfig = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const currentValue = formData[name] || [];
      const updatedValue = checked
        ? [...currentValue, value]
        : currentValue.filter((v) => v !== value);
      setFormData({ ...formData, [name]: updatedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };
  return (
    <div>
      <h1>DynmicFormUsingConfig</h1>
      <form onSubmit={handleSubmit}>
        {formConfig?.map((field, index) => {
          return (
            <div key={index} style={{ marginBottom: "16px" }}>
              <label>{field.label}</label>
              {field.type === "text" || field.type === "email" || field.type === "password" ? (
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "8px", marginTop: "4px" }}
                />
              ) : field.type === "radio" ? (
                field.options.map((option, idx) => (
                  <div key={idx}>
                    <input type="radio" name={field.name} value={option} onChange={handleChange} />
                    <label>{option}</label>
                  </div>
                ))
              ) : field.type === "checkbox" ? (
                field.options.map((option, idx) => (
                  <div key={idx}>
                    <input
                      type="checkbox"
                      name={field.name}
                      value={option}
                      onChange={handleChange}
                    />
                    <label>{option}</label>
                  </div>
                ))
              ) : field.type === "select" ? (
                <select
                  name={field.name}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "8px", marginTop: "4px" }}
                >
                  <option value="">Select {field.label}</option>
                  {field.options.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : null}
            </div>
          );
        })}
        <button type="submit" style={{ padding: "6px 8px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};
