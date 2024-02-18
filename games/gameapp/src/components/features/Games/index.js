import { Box, Button, Typography } from "@mui/material";
import React, { useState, useMemo } from "react";
import style from "./style";

const GenerateRandomNumbers = () => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [randomSelection, setRandomSelection] = useState([]);

  // Generate numbers from 1 to 69
  const numbers = useMemo(() => Array.from({ length: 69 }, (_, i) => i + 1), []);

  // Function to handle the click event on a number button
  const handleNumberClick = (number) => {
    // If the number is already selected, deselect it
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
    } else {
      // If the number is not selected and there are less than 5 selected numbers, select it
      if (selectedNumbers.length < 5) {
        setSelectedNumbers([...selectedNumbers, number]);
      }
    }
  };

  // Function to generate a random selection of 5 numbers
  const generateRandomSelection = () => {
    const randomNumbers = new Set();
    while (randomNumbers.size < 5) {
      const randomNumber = Math.floor(Math.random() * 69) + 1;
      randomNumbers.add(randomNumber);
    }
    setRandomSelection([...randomNumbers]);
    // setSelectedNumbers([...randomNumbers]); // Automatically select the random numbers
  };

  // Function to handle the click event on the "Clear All" button
  const clearAll = () => {
    setSelectedNumbers([]);
    setRandomSelection([]);
  };

  // Function to check if a number is selected
  const isNumberSelected = (number) => {
    return selectedNumbers.includes(number);
  };

  return (
    <Box sx={style.maincontainer}>
      <Typography component="h1">Select Any 5 numbers</Typography>
      <Box sx={{ marginTop: 2 }}>
        <Typography component="h2">Selected Numbers:</Typography>
        <Box sx={{ display: "flex" }}>
          {selectedNumbers.map((number) => (
            <Button key={number} variant="contained" sx={{ marginRight: 1 }}>
              {number}
            </Button>
          ))}
        </Box>
      </Box>
      <Box>
        {[...Array(10)].map((_, lineIndex) => (
          <Box key={lineIndex} sx={{ display: "flex", marginTop: 1 }}>
            {numbers.slice(lineIndex * 7, lineIndex * 7 + 7).map((number) => (
              <Button
                key={number}
                onClick={() => handleNumberClick(number)}
                variant={isNumberSelected(number) ? "contained" : "outlined"}
                sx={{
                  bgcolor: isNumberSelected(number) ? "primary.main" : undefined,
                  color: isNumberSelected(number) ? "white" : undefined,
                }}
              >
                {number}
              </Button>
            ))}
          </Box>
        ))}
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Typography component="h2">Random Selection:</Typography>
        <Box sx={{ display: "flex" }}>
          {randomSelection.map((number) => (
            <Button
              key={number}
              variant="contained"
              sx={{
                marginRight: 1,
                bgcolor: isNumberSelected(number) ? "primary.main" : undefined,
                color: isNumberSelected(number) ? "white" : undefined,
              }}
            >
              {number}
            </Button>
          ))}
          <Button onClick={generateRandomSelection} variant="outlined">
            Generate Random Selection
          </Button>
        </Box>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Button onClick={clearAll} variant="outlined">
          Clear All
        </Button>
      </Box>
    </Box>
  );
};

export default GenerateRandomNumbers;
