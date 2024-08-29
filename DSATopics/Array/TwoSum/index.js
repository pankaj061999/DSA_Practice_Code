// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/* Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

const A = [2, 7, 11, 15, 7];
const sum = 9;

const TwonuberSum = (Array, sum) => {
  let result1 = [];
  for (let i = 0; i < Array.length; i++) {
    for (let j = i + 1; j < Array.length; j++) {
      if (Array[i] + Array[j] === sum) {
        result1.push(i);
        result1.push(j);
      }
    }
  }
  console.log("Print two number sum array result ==>>", result1);
  return result1;
};

TwonuberSum(A, sum);

var twoSum = function (nums, target) {
  let map = new Map(); // Create a map to store the numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]; // Calculate the complement of the current number

    if (map.has(complement)) {
      // If the complement exists in the map, we have found the solution
      return [map.get(complement), i];
    }

    // Otherwise, add the current number and its index to the map
    map.set(nums[i], i);
  }

  return []; // Return an empty array if no solution is found
};

const arr = [2, 7, 11, 15];
const tar = 9;
console.log(twoSum(arr, tar)); // This will print [0, 1]
