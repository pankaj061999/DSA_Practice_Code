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

const recursiveInsertionSort = (arr, n = arr.length) => {
  // Base case: If only one element or empty, it's already sorted
  if (n <= 1) {
    return;
  }

  // Sort first n-1 elements
  recursiveInsertionSort(arr, n - 1);

  // Insert last element at its correct position in the sorted array
  const last = arr[n - 1];
  let j = n - 2;

  // Move elements greater than 'last' one position ahead
  while (j >= 0 && arr[j] > last) {
    arr[j + 1] = arr[j];
    j--;
  }

  // Place 'last' at its correct position
  arr[j + 1] = last;
};

// Example usage:
const arr1 = [64, 25, 12, 22, 11];
recursiveInsertionSort(arr1);

console.log("Sorted array:", arr1);
