// Approach: Divides the array into two parts: sorted and unsorted. Repeatedly selects the smallest element from the unsorted part and moves it to the sorted part.Time Complexity: O(n^2) in all cases.Space Complexity: O(1) (in-place sorting).
const SlectionSorting = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // let say minIndex for min nuber is
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      console.log("this loop end after that", minIndex);
    }
    console.log("after minIndex updated", minIndex);
    if (minIndex != i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
};

const array = [32, 1, 34, 23, 78, 90, 24];

const result = SlectionSorting(array);
console.log("selectionsorting", result);

// Space Complexity: O(1) and TIme Complexity is  = O(N^2)
