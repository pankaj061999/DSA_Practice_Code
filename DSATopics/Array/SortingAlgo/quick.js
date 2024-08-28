const QuickSorting = (arr) => {
  // Base case: If the array has 0 or 1 elements, it's already sorted.
  if (arr.length <= 1) {
    return arr;
  }

  // Choose the last element as the pivot
  const len = arr.length;
  const pivot = arr[len - 1];
  const left = [];
  const right = [];

  // Partition the array into left and right sub-arrays
  for (let i = 0; i < len - 1; i++) {
    // Iterate till the second last element
    if (arr[i] < pivot) {
      left.push(arr[i]); // Elements less than pivot go to the left array
    } else {
      right.push(arr[i]); // Elements greater than or equal to pivot go to the right array
    }
  }

  // Print the left and right arrays for debugging
  console.log("Print left and right array ==>>", left, right);

  // Recursively sort the left and right arrays, and combine them with the pivot
  return [...QuickSorting(left), pivot, ...QuickSorting(right)];
};

// Example array to sort
const A2 = [3, 4, 1, 9, 5, 7, 8, 10, 88, 12, 32, 89];

// Call the QuickSorting function and store the result
const sortedArray = QuickSorting(A2);

// Print the final sorted array
console.log("Sorted Array:", sortedArray);
