import React, { useState } from "react";
import AutoSuggestion from "@/components/features/MachineROund/AutoSuggestion";
import { DynmicFormUsingConfig } from "@/components/features/MachineROund/DynmicFormusingConfig";
import ProgressComponent from "@/components/features/MachineROund/ProgressBar";

export default function Interview() {
  const [open, setopen] = useState(false);
  const [faqid, setFaqID] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const [idList, setIdList] = useState({});

  // const idList = [];

  const faqList = [
    { id: 0, Question: "What is React", Answer: "React is a javascript framwork." },
    { id: 1, Question: "What is Next", Answer: "Next js " },
    {
      id: 2,
      Question: "what is use for UseState",
      Answer: "we can use state in functional component",
    },
  ];

  const handleFaq = (itemId) => {
    if (itemId != faqid) {
      setopen(true);
    } else {
      setopen(faqid == itemId && !open);
    }
    setFaqID(itemId);
  };

  // const handleChange = (id) => {
  //   console.log("Print id", idList);
  //   setIdList({ ...idList, id });
  // };

  console.log("array length ===>>", idList, faqList.length);

  const handleChange = (id) => {
    setIdList((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the selection state of the current ID
    }));
  };

  const selectedIds = Object.keys(idList).filter((key) => idList[key]);

  console.log("Selected IDs:", selectedIds, "Total FAQs:", faqList.length);

  return (
    <div>
      {/* <AutoSuggestion />
      <DynmicFormUsingConfig />
      <ProgressComponent /> */}

      <div
        style={{
          background: "#fff",
          alignItems: "center",
          padding: "30px",
          color: "#000",
        }}
      >
        {faqList?.map((item, index) => {
          return (
            <div key={index} style={{ border: "1px solid gray", cursor: "pointer" }}>
              <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <input type="checkbox" onChange={() => handleChange(item.id)} />
                <h1
                  style={{ fontSize: "20px", fontWeight: "500", borderBottom: "1px solid #000" }}
                  onClick={() => handleFaq(item.id)}
                >
                  {" "}
                  {item?.Question}{" "}
                </h1>
              </div>

              {faqid === item?.id && open && <p>{item?.Answer}</p>}
            </div>
          );
        })}

        <button
          disabled={selectedIds.length !== faqList.length}
          onClick={() => console.log("Hii submit func")}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
