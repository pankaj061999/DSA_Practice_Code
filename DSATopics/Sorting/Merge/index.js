// Merge Sort uses Divide and conquer method to sort an array or any list of elements. The term divides and conquers means we divide one big problem into several smaller problems and then we solve these small problems. Once the smaller problems are solved, we combine the results which result in the solution to the big problem.

// Understanding the algorithm is simple actually:

// We divide the given array into n arrays each of these arrays contains just 1 element.
// Merge the arrays to produce a new array.
// Repeat step 2 until there is only 1 array remaining, which will be the sorted array.

const Merge = (arr, left, mid, right) => {

    console.log("arr merge ==>>", arr, left, mid, right)
  let i = left,
    j = mid + 1,
    k = left;
  let arr1 = [];

  while (i <= mid && j <= right) {
    if (arr[i] < arr[j]) {
      arr1[k] = arr[i];
      i++;
    } else {
      arr1[k] = arr[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements from both subarrays, if any
  while (i <= mid) {
    arr1[k] = arr[i];
    i++;
    k++;
  }

  while (j <= right) {
    arr1[k] = arr[j];
    j++;
    k++;
  }

  // Copy elements back to the original array
  for (let p = left; p <= right; p++) {
    arr[p] = arr1[p];
  }
};

const MergeSortingAlgo = (arr, left, right) => {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);

    MergeSortingAlgo(arr, left, mid);
    MergeSortingAlgo(arr, mid + 1, right);
    Merge(arr, left, mid, right);
  }
};

let arr = [4, 2, 9, 1, 5, 8];
MergeSortingAlgo(arr, 0, arr.length - 1);
console.log("Print Merge Sorting ===>>", arr);
