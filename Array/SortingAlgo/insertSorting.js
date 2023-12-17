const insertSortingAlgo = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let sortedArray = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > sortedArray) {
      console.log("Prin t ==>>", j, sortedArray);
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = sortedArray;
  }
  return arr;
};

const array = [32, 1, 34, 23, 78, 90, 24];
const result = insertSortingAlgo(array);
console.log("Sorted Array:", result);
