/**You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1. */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let index1 = m - 1;
  let index2 = n - 1;
  let mergedIndex = m + n - 1;
  while (index1 >= 0 && index2 >= 0) {
    if (nums1[index1] >= nums2[index2]) {
      nums1[mergedIndex] = nums1[index1];
      console.log("Print value of ==>", nums1[mergedIndex]);
      index1--;
    } else {
      nums1[mergedIndex] = nums2[index2];
      index2--;
    }
    mergedIndex--;
  }

  // If there are remaining elements in nums2, copy them to nums1
  while (index2 >= 0) {
    nums1[mergedIndex] = nums2[index2];
    index2--;
    mergedIndex--;
  }
};
