//Approach: Compares adjacent elements and swaps them if they are in the wrong order. Repeats this process until the entire array is sorted.Time Complexity: O(n^2) in the worst and average cases, O(n) in the best case if the array is already sorted.Space Complexity: O(1) (in-place sorting).

console.time("bubblesorting");
const bubbleSorting = (arr) => {
  let temp = undefined;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
  return arr;
};

const array = [32, 1, 34, 23, 78, 90, 24];

const result = bubbleSorting(array);

console.timeEnd("bubblesorting");
