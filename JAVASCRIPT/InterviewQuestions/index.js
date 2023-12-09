// Write a JavaScript function to calculate the sum of two numbers.

function addNumbers(num1, num2) {
  return num1 + num2;
}

// Example usage:
const result = addNumbers(5, 7);
console.log(result); // Output: 12

//   Write a JavaScript program to find the maximum number in an array.
function findMaxNumber(arr) {
  if (arr.length === 0) {
    return undefined; // Handle empty array
  }

  let max = arr[0]; // Assume the first element is the maximum

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Update max if a larger value is found
    }
  }

  return max;
}

// Example usage:
const numbers = [5, 12, 8, 24, 2, 19, 9];
const maxNumber = findMaxNumber(numbers);
console.log(`The maximum number is: ${maxNumber}`);

// 3.) Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const length = cleanedStr.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (cleanedStr[i] !== cleanedStr[length - 1 - i]) {
      return false;
    }
  }

  return true;
}

// Example usage:
const testString1 = "racecar";
const testString2 = "hello";

console.log(`Is "${testString1}" a palindrome? ${isPalindrome(testString1)}`);
console.log(`Is "${testString2}" a palindrome? ${isPalindrome(testString2)}`);

// 4.) Write a JavaScript program to reverse a given string.
function reverseString(inputString) {
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  return reversedString;
}

// Example usage:
const originalString = "Hello, World!";
const reversed = reverseString(originalString);

console.log(`Original string: ${originalString}`);
console.log(`Reversed string: ${reversed}`);

// 5.) Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

function filterEvenNumbers(arr) {
  const evenNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }

  return evenNumbers;
}

// Example usage:
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = filterEvenNumbers(numbers1);

console.log("Original numbers:", numbers1);
console.log("Even numbers:", evenNumbers);

// 6.) Write a JavaScript program to calculate the factorial of a given number.
function calculateFactorial(number) {
  if (number < 0) {
    return "Factorial is not defined for negative numbers";
  } else if (number === 0) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }
}

// Example usage:
const num = 5;
const result1 = calculateFactorial(num);
console.log(`The factorial of ${num} is: ${result1}`);

// 7.) Write a JavaScript function to check if a given number is prime.

function isPrime(number) {
  if (number <= 1) {
    return false; // 0 and 1 are not prime numbers
  } else if (number <= 3) {
    return true; // 2 and 3 are prime numbers
  } else if (number % 2 === 0 || number % 3 === 0) {
    return false; // Numbers divisible by 2 or 3 are not prime
  }

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false; // Numbers divisible by i or i + 2 are not prime
    }
  }

  return true; // If no divisors were found, the number is prime
}

// Example usage:
const numcount = 17;
const finalresult = isPrime(numcount);
console.log(`${numcount} is prime? ${finalresult}`);

// 8.) Write a JavaScript program to find the largest element in a nested array.

function findLargestInNestedArray(arr) {
  let largest = arr[0][0];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
  }

  return largest;
}

// Example usage:
const nestedArray = [
  [3, 8, 11],
  [17, 5, 9],
  [12, 4, 6],
];

const largest = findLargestInNestedArray(nestedArray);
console.log("The largest element in the nested array is:", largest);

// 9.)
