const generateRandomSelection = () => {
  const randomNumbers = [];
  while (randomNumbers.length < 5) {
    const randomNumber = Math.floor(Math.random() * 69) + 1;
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  setRandomSelection(randomNumbers);
  setSelectedNumbers(randomNumbers); // Automatically select the random numbers
};


