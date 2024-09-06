import React, { useState } from "react";
import _, { debounce } from "lodash";

export default function AutoSuggestion() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const allSuggestions = ["Jaipur", "Jodhpur", "Jaisalmer", "Udaipur", "Ajmer"];

  const testArray = [1, 2, "", 4, 5, 6, 7, 8, 9];

  console.log("Print chunks", _.chunk(testArray, 2));

  const handleChange = debounce((value) => {
    if (value.length > 0) {
      const finalsuggestion = allSuggestions.filter((item) =>
        item.toLowerCase().startsWith(value.toLowerCase())
      );

      setSuggestions(finalsuggestion);
      console.log("Print finalvalue", finalsuggestion);
    } else {
      setSuggestions([]);
    }
  }, 3000);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    handleChange(value);
  };

  const handleSuggestionCLick = (inputdata) => {
    setInputValue(inputdata);
    setSuggestions([]);
  };

  return (
    <div>
      <h1> Design Autocomplete or Typeahead Suggestions </h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="यहाँ टाइप करें..."
        style={{ width: "100%", padding: "8px", fontSize: "16px", boxSizing: "border-box" }}
      />

      {suggestions.length > 0 && (
        <ul
          style={{
            listStyleType: "none",
            padding: "0",
            margin: "0",
            border: "1px solid #ccc",
            maxHeight: "150px",
            overflowY: "auto",
          }}
        >
          {suggestions?.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => handleSuggestionCLick(item)}
                style={{ padding: "8px", cursor: "pointer" }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
