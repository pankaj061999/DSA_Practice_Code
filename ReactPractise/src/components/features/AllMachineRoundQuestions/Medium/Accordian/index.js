import React, { useState } from "react";

export const AccordionComponent = () => {
  const [activeFaqID, setActiveFaqID] = useState(null);

  const faqList = [
    {
      id: 0,
      Question: "What is React.js?",
      Answer:
        "React.js is a JavaScript library for building user interfaces based on component logic.",
    },
    {
      id: 1,
      Question: "What is Next.js?",
      Answer:
        "Next.js is a React framework for server-side rendering and generating static websites.",
    },
    {
      id: 2,
      Question: "What is Node.js?",
      Answer:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine for building server-side applications.",
    },
    {
      id: 3,
      Question: "What is Nest.js?",
      Answer:
        "Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.",
    },
  ];

  const handleAccordion = (id) => {
    setActiveFaqID((prevID) => (prevID === id ? null : id));
  };

  return (
    <div
      style={{
        width: "80%",
        margin: "0 auto",
        backgroundColor: "#1edddd",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", marginBottom: "20px" }}
      >
        Accordion Component
      </h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {faqList?.map((item) => (
          <div
            key={item.id}
            onClick={() => handleAccordion(item.id)}
            style={{
              backgroundColor: "#fff",
              borderRadius: "6px",
              padding: "15px",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0",
                color: "#000",
              }}
            >
              {item.Question}
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                {activeFaqID === item.id ? "-" : "+"}
              </span>
            </h2>
            {activeFaqID === item.id && (
              <p style={{ fontSize: "16px", color: "#555", marginTop: "10px" }}>{item.Answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
