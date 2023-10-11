// Approach: Divides the array into two parts: sorted and unsorted. Repeatedly selects the smallest element from the unsorted part and moves it to the sorted part.Time Complexity: O(n^2) in all cases.Space Complexity: O(1) (in-place sorting).
console.time("selectionsorting");
const SlectionSorting = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.log(arr);
};

const array = [32, 1, 34, 23, 78, 90, 24];

const result = SlectionSorting(array);
console.timeEnd("selectionsorting");
