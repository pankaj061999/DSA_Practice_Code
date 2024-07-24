// Common String-Related Interview Questions (DSA):
// Reverse a String:

// Write a function to reverse a given string.
// Check for Palindrome:

// Determine if a string is a palindrome (reads the same forwards and backward).
// Anagram Detection:

// Check if two strings are anagrams of each other (contain the same characters in a different order).
// String Compression:

// Compress a string by replacing repeated characters with a count (e.g., "aaabbbbcc" becomes "a3b4c2").
// Longest Substring Without Repeating Characters:

// Find the length of the longest substring without repeating characters in a given string.
// String to Integer (atoi):

// Implement the atoi function to convert a string to an integer.
// String Matching (Pattern Searching):

// Implement substring search algorithms like the Knuth-Morris-Pratt (KMP) algorithm or the Boyer-Moore algorithm.
// Edit Distance (Levenshtein Distance):

// Calculate the minimum number of operations (insertion, deletion, or substitution) required to transform one string into another.
// Longest Common Subsequence (LCS):

// Find the length of the longest common subsequence between two strings.
// String Rotation:

// Check if one string is a rotation of another (e.g., "waterbottle" is a rotation of "erbottlewat").
// Regular Expression Matching:

// Implement regular expression matching with support for * and ..
// String Permutations:

// Generate all permutations of a given string.
// Count and Say:

// Generate the nth term of the "count and say" sequence (e.g., "1" -> "11" -> "21" -> "1211" -> ...).
// Longest Palindromic Substring:

// Find the longest palindromic substring within a given string.
// Rabin-Karp Algorithm:

// Implement the Rabin-Karp string matching algorithm for pattern searching.
// String Reversal in Place:

// Reverse a string in place (without using additional memory).
// String Segmentation:

// Determine if a string can be segmented into valid words from a dictionary.
// Longest Prefix:

// Find the longest common prefix among an array of strings.
// These questions cover a wide range of string manipulation and string-related algorithms, and they are commonly asked in technical interviews for software development positions. Practice solving these problems to improve your problem-solving skills for DSA interviews.

const findMaximumSum = (arr, k) => {
  let len = arr.length;
  let max_sum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i <= len - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }

    max_sum = Math.max(sum, max_sum);
  }

  console.log("Maximum sum ==>>", max_sum);
  return max_sum;
};

const arr = [1, 4, 2, 10, 23, 3, 1, 0, 20],
  k = 4;

const result = findMaximumSum(arr, k);
console.log("Result ==>>", result);
