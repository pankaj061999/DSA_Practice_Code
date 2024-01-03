// find largest element this array.

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

console.log(findLargestelemnt(arr));

// find second largest elemnt

const f1 = (arr) => {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 2];
};

let A1 = [2, 5, 1, 3, 8, 10, 12];

console.log(f1(A1));

//  O(n log n)  time Complixity

const removeDuplicates = (nums) => {
  const hash = {};
  const result = [];

  for (const num of nums) {
    console.log("Peint arrau ==>>", num, hash, typeof hash);
    if (!hash[num]) {
      hash[num] = true;
      result.push(num);
    }
  }

  return result;
};

let arr1 = [1, 1, 2, 2, 2, 3, 3];
console.log("Unique array: ", removeDuplicates(arr1));
