//1.) find largest element this array.

const findLargestelemnt = (arr) => {
  let len = arr.length;
  if (len <= 0) {
    return;
  }
  let max = arr[0];
  for (let i = 0; i < len; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

let arr = [2, 5, 1, 3, 8, 10, 12, 0];

// console.log(findLargestelemnt(arr));

//2.) find second largest elemnt

const f1 = (arr) => {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 2];
};

let A1 = [2, 5, 1, 3, 8, 10, 12];

// console.log(f1(A1));

//  O(n log n)  time Complixity

const removeDuplicates = (nums) => {
  const hash = {};
  const result = [];

  for (const num of nums) {
    console.log("Peint arrau ==>>", num, hash, hash[num]);
    if (!hash[num]) {
      hash[num] = true;
      result.push(num);
    }
  }

  return result;
};

let arr1 = [1, 1, 2, 2, 2, 3, 3];
// console.log("Unique array: ", removeDuplicates(arr1));

// 3.) left side rotate based on nuber
const leftRotateArray = (arr, k) => {
  const len = arr.length;

  // To handle cases where k is larger than array length
  k = k % len;

  if (k === 0) {
    return arr; // No rotation needed
  }

  reverseArray(arr, 0, k - 1);
  reverseArray(arr, k, len - 1);
  reverseArray(arr, 0, len - 1);

  return arr;
};

function reverseArray(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

const Arr = [1, 2, 3, 4, 5, 6];
const k = 2;
// console.log("Print leftRotate Array ==>>", leftRotateArray(Arr, k));

//4.)  nonzero element first and then zero element

var moveZeroes = (nums) => {
  let nonZeroPointer = 0;

  // Move all non-zero elements to the front of the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroPointer] = nums[i];
      nonZeroPointer++;
    }
  }

  // console.log("Print nonzeropointer ==>>", nonZeroPointer);

  // Fill the remaining positions with zeroes
  for (let i = nonZeroPointer; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

const Arr1c = [1, 0, 2, 3, 0, 4, 0, 1];

// console.log("Print nonzeropointer ==>>", moveZeroes(Arr1c));

//5.)  linear Search according to target find element given array if not present in array then return -1;

const findNuberGivernArray = (arr, num) => {
  let findnu = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      findnu = true;
      return i;
    }
  }
  if (!findnu) {
    return -1;
  }
};

const A2 = [1, 2, 3, 4, 5, 6],
  num = 9;

// console.log("Print find index target element ==>>", findNuberGivernArray(A2, num));

{
  /* 7.) solution 1.) Union of Two Sorted Arrays */
}

const finalSortedArray = (arr1, arr2) => {
  let result = arr1.concat(arr2);

  if (result.length === 0) {
    return "Arrays are empty"; // Handle case where both arrays are empty
  }

  const mySet = new Set();

  // const findMax = Math.max(...result);
  // let res = [];

  for (let i = 0; i < result.length; i++) {
    mySet.add(result[i]);
  }

  // if (result.includes(0)) {
  //   console.log("here", res);
  //   res.push(0);
  //   return res.sort((a, b) => a - b);
  // } else {
  //   return res;
  // }
  return mySet;
};

const Ar1 = [0, 1, 2, 3, 4, 5],
  Ar2 = [2, 3, 4, 4, 5];

// console.log("Print final Sorted array ====>>", finalSortedArray(Ar1, Ar2));

// solution 7.2)
const finalSortedArraySet = (arr1, arr2) => {
  const result = [...new Set([...arr1, ...arr2])];

  if (result.length === 0) {
    return "Arrays are empty";
  }

  return result;
};

const Ar3 = [0, 1, 2, 3, 4, 5, 3];
const Ar4 = [2, 3, 4, 4, 5, 5, 0];

console.log("Print final Sorted array ====>>", finalSortedArraySet(Ar3, Ar4));

// Find the missing number in an array

const findMissingNo = (arr, n) => {
  let res = new Set();
  for (let i = 0; i < n; i++) {
    res.add(i + 1);
  }

  let finalresult = [];

  for (let num of res) {
    if (!arr.includes(num)) {
      finalresult.push(num);
    }
  }

  return finalresult;
};

const T1 = [1, 3, 4, 5, 7, 9],
  N = 9;
console.warn("Print missing nuber ====>>>", findMissingNo(T1, N));
