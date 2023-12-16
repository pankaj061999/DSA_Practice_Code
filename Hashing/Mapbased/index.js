// Q)1 Count frequency of each element in the array

// solution 1 based on Map based hashing Approch

const arrayHashingSolution = (a1, q1) => {
  const hashMap = new Map();

  console.log("before for loop===>>", hashMap);

  // Count occurrences in a1
  for (const num of a1) {
    hashMap.set(num, (hashMap.get(num) || 0) + 1);
  }

  const result = [];
  for (const query of q1) {
    if (hashMap.has(query)) {
      result.push(hashMap.get(query));
    } else {
      result.push(0);
    }
  }

  return result;
};

const a1 = [10, 5, 10, 15, 10, 5];
const q1 = [10, 5, 15];

console.log("Array Hashing Solution:", arrayHashingSolution(a1, q1));
