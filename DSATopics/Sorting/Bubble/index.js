// Considered to be one of the most common tools of this trade, Bubble sort works by creating a loop that compares each item in the array with another item. If the compared item is smaller than the one on hand, we swap their places. This keeps on going until we have a pass where no item in the array is bigger than the item that is next to it.

// Bubble Sort has O(n2) time complexity and O(n) space complexity.

const BubbleSorting = (arr) => {
  if (arr.length < 0) {
    return;
  }
  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log("Print bubble sorting  ===>>", arr);
};

let arr = [3, 1, 9, 2, 4];

BubbleSorting(arr);
