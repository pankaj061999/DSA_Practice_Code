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

// console.log("Print final Sorted array ====>>", finalSortedArraySet(Ar3, Ar4));

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
// console.warn("Print missing nuber ====>>>", findMissingNo(T1, N));

//9.) Count Maximum Consecutive One’s in the array

const countConsecutiveNuber = (nums) => {
  // if (arr.length < 2) {
  //   return 1;
  // }

  // let countrep = 0;

  // for (let i = 0; i < arr.length - 1; i++) {
  //   if (arr[i] === arr[i + 1]) {
  //     countrep++;
  //     console.log("hiii", i, arr[i]);
  //   }
  // }

  // return countrep;
  let maxCount = 0;
  let currentCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
      console.log("hiii", currentCount, maxCount);
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
};

const T2 = [1, 3, 4, 5, 7, 9, 1, 2, 1, 1, 1, 1];

// console.log("Print count repeation ==>>", countConsecutiveNuber(T2));

//Q 10). Find the number that appears once, and the other numbers twice

const findNumberAppearsOnce = (arr) => {
  let result = 0;

  for (let num of arr) {
    result ^= num;
    console.log("Print ", result ^ num, num, result);
  }

  return result;
};

const T3 = [1, 2, 1, 1, 1];

// console.log("Print count repeation ==>>", findNumberAppearsOnce(T3));

// const A = [1, [2, [3, [4], 5]]]

//[1, 2,3, 4, 5]
const flattenArray = (arr) => {
  let result = [];

  arr.forEach((element) => {
    console.log("Print element before", element);
    if (Array.isArray(element)) {
      result = result.concat(flattenArray(element));
      console.log("Print element", Array.isArray(element), element, flattenArray(element));
    } else {
      result.push(element);
    }
  });

  return result;
};

const A = [1, [2, [3, [4], 5]]];
// const flattenedArray = flattenArray(A);
// console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]

// {2,2,1} count nuber repation is one

const CountoneReaptionNo = (arr) => {
  const maxNo = Math.max(...arr);
  const minNo = Math.min(...arr);
  // console.log("Print maxNo ==>>", maxNo);

  const res = Array.from({ length: maxNo - minNo + 1 }, () => 0);

  // console.log("Print res before===>>", res);
  for (let i = 0; i < arr.length; i++) {
    res[arr[i] - minNo] += 1;

    // console.log("Print res ===>>", res);
  }

  let result = [];

  for (let i = 0; i < res.length; i++) {
    if (res[i] === 1) {
      result.push(i + minNo);
    }
  }

  return result[0];
};

const B1 = [2, 2, 4, 1, 4];
CountoneReaptionNo(B1);

// solution second
var singleNumber = function (nums) {
  let arr = nums.sort((a, b) => a - b); // Create a copy of the array and sort it

  console.log("Print arr before", arr);

  for (let i = 0; i <= nums.length - 1; i += 2) {
    // Iterate by 2
    if (arr[i] !== arr[i + 1]) {
      console.log("Print arr if condition", arr[i], arr[i + 1]);
      return arr[i];
    }
  }

  console.log("Print arr", arr);

  return arr[arr.length - 1]; // Return the first non-matching pair
};

// Q.12) Longest Subarray with given Sum K(Positives)

// solution 1.) Brute-force approach
const longestSubArray = (arr, k) => {
  let maxMiumNo = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (k == sum) {
        maxMiumNo = Math.max(maxMiumNo, j - i + 1);
        // console.log("Print k  value", k, sum, maxMiumNo);
        // return maxMiumNo;
      }
    }
  }
  console.log("Maximum Sub Arry length", maxMiumNo);
  return maxMiumNo;
};

const B2 = [2, 3, 5, 1, 9],
  sum = 10;
// longestSubArray(B2, sum);

// time complixity is O(n^2)

// solution 2.) Accumulate sum based or (Prefix sum) and Hashing
const longestSubArrayBasedonAccumulatesum = (nums, k) => {
  let count = 0;
  let sum = 0;
  let sumCountMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === k) {
      count++;
    }

    if (sumCountMap.has(sum - k)) {
      count += sumCountMap.get(sum - k);
    }

    // Increment the count for the current sum
    if (sumCountMap.has(sum)) {
      sumCountMap.set(sum, sumCountMap.get(sum) + 1);
    } else {
      sumCountMap.set(sum, 1);
    }
  }

  // return count;
  console.log("Print prefix array", count, sumCountMap);
};

let B3 = [1, 2, 1, 2, 1];
let sum1 = 3;
// longestSubArrayBasedonAccumulatesum(B3, sum1);

// time complixity is O(N)
// and space complixity is O(1)

// Two Sum : Check if a pair with given sum exists in Array
// solution 1.)

let checkSumPairExist = (arr, targetSum) => {
  let seenNumbers = new Set();

  for (let i = 0; i < arr.length; i++) {
    let complement = targetSum - arr[i];

    if (seenNumbers.has(complement)) {
      // A pair with the given sum is found
      console.log("print arry ==>>", seenNumbers);
      return true;
    }

    // Add the current number to the set of seen numbers
    seenNumbers.add(arr[i]);
  }

  console.log("print arry ==>>", seenNumbers);

  // No pair with the given sum is found
  return false;
};

let checkSumPairreturn = (arr, targetSum) => {
  let seenNumbers = new Map();

  for (let i = 0; i < arr.length; i++) {
    let complement = targetSum - arr[i];

    if (seenNumbers.has(complement)) {
      // A pair with the given sum is found, return the pair of indices
      return [seenNumbers.get(complement), i];
    }

    // Add the current number's index to the map of seen indices
    seenNumbers.set(arr[i], i);
  }

  // No pair with the given sum is found

  console.log("print arry ==>>", seenNumbers);

  // No pair with the given sum is found
  return null;
};

let B4 = [2, 6, 5, 8, 11];
let sum2 = 14;

// console.log("checkSumPairExist:", checkSumPairExist(B4, sum2), checkSumPairreturn(B3, sum2));

// Dutch national flag problem  solve '0', '1', '2' element sort in array sequeance

const solveSortingBasedonnNUber = (nums) => {
  let low = 0;
  let high = nums.length - 1;
  let i = 0;

  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  while (i <= high) {
    if (nums[i] === 0) {
      swap(nums, i, low);
      i++;
      low++;
    } else if (nums[i] === 2) {
      swap(nums, i, high);
      high--;
    } else {
      i++;
    }
  }

  console.log("nums", nums);
};

const B5 = [0, 1, 0, 2, 1, 2];

// solveSortingBasedonnNUber(B5);

//Q.25) Find the Majority Element that occurs more than N/2 times

const CountMajorityElem = (arr) => {
  if (arr.length < 2) {
    return 1;
  }

  let maxNo = Math.max(...arr);

  let res = new Array(maxNo + 1).fill(0);

  console.log("Print res ===>>", res);

  for (let i = 0; i < arr.length; i++) {
    res[arr[i]] += 1;
  }
  console.log("Print arry updated ==>>", res);

  for (let i = 0; i < res.length; i++) {
    if (res[i] > arr.length / 2) {
      console.log("Print length", i);
    }
  }
};

// time Complixty nd Space Complixty = O(n);

const B6 = [4, 4, 2, 4, 3, 4, 4, 3, 2, 4];
// CountMajorityElem(B6);

// solution second:

const CountMajorityElemSolutionMap = (arr) => {
  if (arr.length < 2) {
    return 1;
  }

  let res = new Map();

  console.log("Print res ===>>", res);

  for (let i = 0; i < arr.length; i++) {
    if (res.has(arr[i])) {
      let Countselemnt = res.get(arr[i]);
      // console.log("Map get", Countselemnt);
      res.set(arr[i], Countselemnt + 1);

      if (Countselemnt + 1 > arr.length / 2) {
        console.log("Majority Element:", arr[i]);
        // return arr[i];
      }
    } else {
      res.set(arr[i], 1);
    }
  }
  console.log("Print arry updated map>", res);
};

// time Complixty nd Space Complixty = O(n);

// CountMajorityElemSolutionMap(B6);

//Q.55 Kadane’s Algorithm : Maximum Subarray Sum in an Array

const maxMiumSumSubArray = (arr) => {
  if (arr.length < 2) {
    return;
  }
  let maxMum_Sum = 0;
  let maxSOFar = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    maxMum_Sum = maxMum_Sum + arr[i];

    if (arr[i] > maxMum_Sum) {
      maxMum_Sum = arr[i];
    }

    // Update the maximum sum so far
    maxSOFar = Math.max(maxSOFar, maxMum_Sum);
  }

  // If all elements are negative, set maxSoFar to the maximum element
  if (maxSOFar === 0) {
    maxSOFar = Math.max(...arr);
  }

  console.log("maxSOFar", maxSOFar);
};

// method Second

const FindMaxSubArray = (arr) => {
  let countsum = 0;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    countsum = Math.max(arr[i], arr[i] + countsum);
    max = Math.max(countsum, max);
  }

  console.log("Print sum", max);
};
let subArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
maxMiumSumSubArray(subArray);
FindMaxSubArray(subArray);
