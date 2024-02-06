// Here is how the algorithm works:

// The first element of the array is considered already sorted.
// Pick the next element of the array.
// Compare the selected element with all elements in the array.
// Shift every element in the array which is greater than the value of the selected element.
// Insert the element
// Repeat Step 2 to 5 until the array is sorted.

const insertionSorting = (arr) => {
  if (arr.length < 0) {
    return;
  }

  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  console.log("Print insertion sorting algo ", arr);
};

let arr = [2, 5, 1, 8, 3, 9];

insertionSorting(arr);

// time complixity is : O(n^2);
