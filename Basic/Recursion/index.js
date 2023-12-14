// Print A name N times through Recursion

const checkRecursionOfName = (item, no) => {
  if (no <= 0) {
    return; // base case: stop recursion when no <= 0
  }

  console.log(item, item, no - 1); // Print the name
  checkRecursionOfName(item, no - 1);
};

checkRecursionOfName("Pankaj Kumar Meena", 5);

// 2.)  Print 1 to N using Recursion

const displayNNumber = (n) => {
  if (n <= 0) {
    return; // Base case: stop recursion when n <= 0
  }

  displayNNumber(n - 1); // Print numbers from 1 to n-1
  //   console.log(n); // Print the current number
};

displayNNumber(6);

// 4.) Sum of first N Natural Numbers

const sumOfNNuber = (n) => {
  if (n <= 0) {
    return 0;
  }
  return n + sumOfNNuber(n - 1);
};

console.log(sumOfNNuber(10));

// const sumOfNNuber1 = (n) => {
//   return (n * (n + 1)) / 2;
// };

// console.log(sumOfNNuber1(10));

// time complixty = O(1) and space Complixity = O(1)

// 5.) Factorial of a Number : Iterative and Recursive

const factorialNuber = (n) => {
  if (n <= 0) {
    return 1;
  }
  return n * factorialNuber(n - 1);
};

console.log(factorialNuber(5));

// 6.) Reverse of an Array
function reverseArrayRecursive(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return arr; // Base case: return the array when it has 0 or 1 element
  } else {
    const firstElement = arr[0];
    const rest = arr.slice(1);
    // slice method use for slice this array one by one element
    // console.log(rest)
    return reverseArrayRecursive(rest).concat(firstElement);
  }
}

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArrayRecursive(originalArray);
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]

// 7.) Check if the given String is Palindrome or not

var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (s.length === 0 || s.length === 1) {
    return true;
  }

  if (s[0] === s[s.length - 1]) {
    return isPalindrome(s.slice(1, -1));
  } else {
    return false;
  }
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("pankaj")); // Output: false

// 9.) Print Fibonacci Series up to Nth term

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function generateFibonacciSeries(count) {
  const series = [];
  for (let i = 0; i < count; i++) {
    series.push(fibonacci(i));
  }
  return series;
}

const n = 20;
console.log(generateFibonacciSeries(n));
