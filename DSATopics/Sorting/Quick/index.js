// Quick sort is a highly efficient sorting algorithm that follows the divide-and-conquer paradigm. It works by selecting a "pivot" element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then recursively sorted.

// Here's how the quick sort algorithm typically works:

// Choose a pivot: Select an element from the array to serve as the pivot. This can be done in various ways, such as selecting the first, last, or middle element of the array.

// Partitioning: Rearrange the elements in the array so that all elements less than the pivot come before it, and all elements greater than the pivot come after it. After this partitioning step, the pivot is in its final sorted position.

// Recursion: Recursively apply the quick sort algorithm to the sub-arrays on either side of the pivot until the entire array is sorted.

// Combine: Once the sub-arrays are sorted, the entire array is sorted.

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];

  console.log("Print pivot ==>>", pivot)

  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) {
      continue; // Skip the pivot element
    }
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("Original array:", array);
const sortedArray = quickSort(array);
console.log("Sorted array:", sortedArray);
