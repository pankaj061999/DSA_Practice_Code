// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = (num, target) => {
  if (num.length < 2) return [];
  let map = {};

  for (let i = 0; i < num.length; i++) {
    let diff = target - num[i];
    console.log(
      "if before condition ====>>",
      map.hasOwnProperty(diff),
      map[diff]
    );
    if (map.hasOwnProperty(diff)) {
      return [map[diff], i];
    } else {
      map[num[i]] = i;
    }
  }
};

const arr1 = [2, 7, 11, 15];
const target1 = 9;

console.log(twoSum(arr1, target1));

let exampleObj = {};
exampleObj.height = 100;
exampleObj.width = 100;

// console.log(exampleObj);

// console.log("Print check hasOwnProperty for this exampleObj ===>>", exampleObj.hasOwnProperty("height"))

// Q.2 Best Time to Buy and Sell Stock.

const maxProfit = (prices) => {
  if (prices.length < 2) return 0;

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    console.log("Print minPrice ===>>", minPrice, prices[i]);
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      console.log(
        "Print maxProfit ===>>  !!!!!!!!!!!@@@@@@@@@@",
        maxProfit,
        prices[i],
        minPrice
      );
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  }

  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];

// console.log("Print maxProfit =====>>>>>>>>>", maxProfit(prices));

// 217. Contains Duplicate

const containsDuplicatNumber = (nums) => {
  if (nums.length < 2) return false;

  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    console.log("Print set ===>>", set);
    if (set.has(nums[i])) {
      return true;
    } else {
      set.add(nums[i]);
    }
  }

  return false;
};

const Arr = [1, 2, 3, 4, 1, 6, 7, 8, 9, 10];

// console.log("Print containsDuplicatNumber ===>>", containsDuplicatNumber(Arr));

// 219. Contains Duplicate II

const findDubplicateOrNot = (nums, k) => {
  if (nums.length < 2) return false;

//   let map = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (nums.hasOwnProperty(nums[i])) {
//       // console.log("Print map ===>>", map);
//       if (i - map[nums[i]] <= k) {
//         return true;
//       }
//     }
//     map[nums[i]] = i;
//     console.log("Print map ===>>", map);
//   }

//   return false;
let map = {};

for (let i = 0; i < nums.length; i++) {
  if (map.hasOwnProperty(nums[i])) {
    if (i - map[nums[i]] <= k) {
      return true;
    }
  }
  map[nums[i]] = i;
}

return false;
};

const Arr1 = [1, 2, 3, 1];

const k = 3;
console.log("Print findDubplicateOrNot ===>>", findDubplicateOrNot(Arr1, k));
