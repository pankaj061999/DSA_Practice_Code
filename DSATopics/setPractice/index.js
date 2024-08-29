const num = new Set();

const valuesToAdd = [1, 1, 23, 2, 3, 4, 5];

// Adding multiple values using a loop
// valuesToAdd.forEach((value) => num.add(value));

for (let i = 0; i < valuesToAdd.length; i++) {
  num.add(valuesToAdd[i]);
}

console.log("Print set value ==>>", num, num.has(7), num.delete(1));

const arr = [1, 2, 3, 4, 2, 3, 4, 5, 1];

const result = arr.filter((item, index) => arr.indexOf(item) === index);

console.log("Print result ==>>", result);
