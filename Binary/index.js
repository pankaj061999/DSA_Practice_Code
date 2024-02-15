//Q.1) Binary Search question

const BinarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  if (arr.length < 0) {
    return;
  }

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      console.log("Target found at index:", mid);
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  console.log(search);
  return -1;
};

const arr = [3, 4, 6, 7, 9, 12, 16, 17];
let target = 6;
BinarySearch(arr, target);

// Q.2) Implement Lower Bound
// Problem Statement: Given a sorted array of N integers and an integer x, write a program to find the lower bound of x.

const findLowerBoundElement = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  let lowerBoundIndex = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] >= target) {
      lowerBoundIndex = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  console.log("Print arrray target pre less element ==>>", lowerBoundIndex);
};

const Bin1 = [3, 4, 6, 7, 9, 12, 16, 17];
let tar = 6;
findLowerBoundElement(arr, tar);

//@pankaj061999 Q.3  Implement Upper Bound

const findUpeerBoundElement = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  let upperBoundIndex = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] <= target) {
      low = mid + 1;
    } else {
      upperBoundIndex = mid;
      high = mid - 1;
    }
  }
  console.log("Print Uper bound", upperBoundIndex);
};

findUpeerBoundElement(arr, tar);
