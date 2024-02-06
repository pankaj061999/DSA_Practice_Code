// we focus on finding the smallest value in the array to get the sorting done. Here is a step by step breakdown of how Selection Sort works:

// We assume the first item in the array as the smallest one.
// We compare this item to the next item in the array.
// If the next item is smaller than the one at hand, we set the next item as the new smallest value.
// We keep repeating these steps until we reach the end of the array.
// When we find value in the array that is smaller than the one we started with, we swap their positions.
// We keep doing the comparisons and moving to the next item. Until the entire array is sorted.

const SelectionSortingAlgo = (arr) => {
  if (arr.length < 0) {
    return;
  }

  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }

  console.log("Print selection sorting result ===>> ", arr);
};

let arr = [3, 9, 7, 1, 2, 4];

SelectionSortingAlgo(arr);
