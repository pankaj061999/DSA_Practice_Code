// ConcatenationCombining two or more strings to create a new string. This is often done using the + operator or string concatenation functions provided by the programming language. :
let Name = "Pankaj",
  lastName = "Meena";

// console.log("Name ====>> ", Name + lastName);

// # 1.Reverse a String:Write a function that takes a string as input and returns the string reversed. without predefind function

const reverseString = (str) => {
  let reverseString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
};

// console.log("return inal Reverse String ===>>>", reverseString("Pankaj Meena"));

// #2. Write a function that checks if a given string is a palindrome. A palindrome is a string that reads the same forwards and backward, ignoring spaces, punctuation, and capitalization.

const isPalindrome = (str) => {
  // Helper function to remove spaces and punctuation
  const cleanString = (input) => {
    return input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  };

  // Remove spaces and punctuation and convert to lowercase
  const cleanedStr = cleanString(str);

  // Compare characters from start and end
  for (let i = 0; i < cleanedStr.length / 2; i++) {
    if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

console.log("Is Palindrome:", isPalindrome("A man, a plan, a canal, Panama"));
console.log("Is Palindrome:", isPalindrome("race car"));
console.log("Is Palindrome:", isPalindrome("hello world"));

// # 3.Interview Question: Anagram Detection

// Write a function that checks if two given strings are anagrams of each other. Ignore spaces and consider the comparison to be case-insensitive.

function areAnagrams(str1, str2) {
  // Remove spaces and convert to lowercase
  const cleanStr1 = str1.replace(/\s/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, "").toLowerCase();

  // Check if the lengths of the cleaned strings are different
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Create objects to store character counts
  const charCount1 = {};
  const charCount2 = {};

  // Count characters in the first string
  for (const char of cleanStr1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  // Count characters in the second string
  for (const char of cleanStr2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  // Compare character counts
  for (const char in charCount1) {
    // console.log("For loop inside", charCount1[char], charCount2[char]);
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
}

// Example usage:
const string1 = "Listentttt";
const string2 = "Silenttttt";

console.log(areAnagrams(string1, string2)); // Output: true
