const a1 = [1, 4, 2, 8, 3, 9];

const f1 = a1.reduce((acc, curr) => acc + curr, 0);

// console.log("Print reduce function", f1, a1.at(2), a1.pop(), a1, a1.push(12), a1.shift());

let p = [1, 2, 3, 4, 5, 6, 7];

// console.log("Print shift ==>>", p.shift());
// console.log("Print unshift====>>>", p.unshift("Pankaj", "kumar", 2, true), p);

const f2 = p.map((item, index) => {
  // console.log("Print item value ==", item);
  return item;
});
// console.log("Print here solution of map", f2);

// use pop this will be remove last element of array

// console.log("Print solution ==>>", p.pop(), p, p.push("Purvans"));

const reduceFunc = p.reduce((acc, curr) => acc + curr, "hey ");

// console.log("Print reduce function", reduceFunc);

let arr = [1, 2, 3];

// console.log(arr);
// console.log(String(arr) === "1,2,3");

// Q.1 Selection sorting algo
const selectionSortFunc = (arr) => {
  if (arr.length < 1) {
    return arr;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  // console.log("Print minIndex", arr);
  return arr;
};

const A1 = [21, 2, 78, 4, 12, 8, 1];

// const result = selectionSortFunc(A1);

// console.log("Print minIndex", result);

// Q.2 Buble Sort algo

const bubbleSort = (arr) => {
  if (arr.length < 1) {
    return arr;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap adjacent elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const A2 = [64, 34, 25, 12, 22, 11, 90];

// const res = bubbleSort(A2);

// console.log("Print minIndex", res);

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than key,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
};

// Example usage
const A3 = [12, 11, 13, 5, 6];
const res1 = insertionSort(A3);

console.log("Sorted array", res1);
