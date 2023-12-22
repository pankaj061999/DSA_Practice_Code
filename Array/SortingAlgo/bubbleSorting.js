//Approach: Compares adjacent elements and swaps them if they are in the wrong order. Repeats this process until the entire array is sorted.Time Complexity: O(n^2) in the worst and average cases, O(n) in the best case if the array is already sorted.Space Complexity: O(1) (in-place sorting).

// console.time("bubblesorting");
const bubbleSorting = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let isSorted = true; // Flag to check if the array is already sorted

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSorted = false; // Elements were swapped, array might not be sorted yet
      }
    }

    if (isSorted) {
      break; // If no swaps were made, the array is already sorted
    }
  }

  return arr;
};

const array = [32, 1, 34, 23, 78, 90, 24];
const result = bubbleSorting(array);
console.log("Sorted Array:", result);

// my out put Print array value ===>> [ 1,  1, 23, 23, 78, 24, 24]
// console.timeEnd("bubblesorting");

// recuarsion format
const recursiveBubbleSort = (arr, n) => {
  // Base case: If array has only one element or empty, it's already sorted
  if (n === 1) {
    return;
  }

  // One pass of bubble sort. After this pass, the largest element is moved to the end.
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      // Swap elements if they are in the wrong order
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }

  // Recursively sort the remaining elements
  recursiveBubbleSort(arr, n - 1);
};

// Example usage:
const array1 = [64, 34, 25, 12, 22, 11, 90];
recursiveBubbleSort(array1, array1.length);

console.log("Sorted array:", array1);
