const findMaxSubArray = (arr) => {
  let len = arr.length;
  let maxSum = -Infinity;
  let maxSubArray = [];

  console.log("Print lenght", len);

  for (let i = 0; i < len - 2; i++) {
    let sum = 0;
    let currentSubArray = [];

    for (let j = i; j < i + 3; j++) {
      sum += arr[j];
      currentSubArray.push(arr[j]);
    }
    // console.log("Print arrr, ", sum, currentSubArray);

    if (sum > maxSum) {
      maxSum = sum;
      maxSubArray = currentSubArray.slice();
    }
  }

  console.log("Print arrr final ", maxSum, maxSubArray);
};

const A1 = [2, 3, 4, 1, 8, 6, 7];

// findMaxSubArray(A1);

// this is find maxmuim sum this array; here timecomplixity is 0(n2);

// Optimize solution into Slideing Windeow Tech

const findMaximumNumber = (arr, k) => {
  let max = 0;

  for (let i = 0; i <= arr.length - k; i++) {
    for (let j = i; j < i + k; j++) {
      if (arr[j] > max) {
        max = arr[j];
      }
    }
  }
  console.log("Print maximum number ===>>>>", max);
};

// findMaximumNumber(A1, 3);

const SliderWindow = (arr, k) => {

};

SliderWindow(A1, 3);
