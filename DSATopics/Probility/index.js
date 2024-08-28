function generateRandomNumbers() {
  let numbers = [];
  for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 69) + 1);
  }
  return numbers;
}

function calculateProbabilities(iterations) {
  let counts = Array.from({ length: 69 }, () => 0);

  for (let i = 0; i < iterations; i++) {
    let randomNumbers = generateRandomNumbers();
    randomNumbers.forEach((num) => {
      counts[num - 1]++;
    });
  }

  let totalSelections = iterations * 5;
  let probabilities = counts.map((count) => count / totalSelections);

  // Create a Set of objects with numbers as keys and their probabilities as values
  let resultSet = new Set();
  for (let i = 0; i < 69; i++) {
    resultSet.add({ number: i + 1, probability: probabilities[i] });
  }

  return resultSet;
}

let iterations = 5000000; // Increase iterations for more accuracy
let probabilitiesSet = calculateProbabilities(iterations);

console.log("Probabilities Set:", probabilitiesSet);
