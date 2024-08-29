// Count digits in a number

function countDigits(n) {
  let x = n;
  let count = 0;
  while (x !== 0) {
    x = Math.floor(x / 10);
    // console.log(x);
    count++;
  }
  return count;
}

// second solution

const checkPrintNuberCOunt = (n) => {
  return n.toString().length;
};

let n = 12345;
// console.log("Number of digits in " + n + " is " + countDigits(n));

//2.) Reverse a number

const reverseFunc = (a) => {
  let b = a.toString();
  let c = "";

  for (let i = b.length - 1; i >= 0; i--) {
    c += b[i];
  }

  return Number(c);
};

const a = 123;
console.log("reverse number ====>>", reverseFunc(a));

//3.) Check if a number is Palindrome or Not

var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let str = x.toString();
  let reversed = str.split("").reverse().join("");

  return str === reversed;
};

console.log(isPalindrome(121)); // Output: true

// Find GCD of two numbers

const findGCD = (a, b) => {
  // Using the Euclidean algorithm

  //   a mod b=a−b× |a/b| this is way to calucalte moduls

  while (b !== 0) {
    let temp = b;
    b = a % b;

    a = temp;
    // console.log("Print b==>", b, a, temp);
  }
  return a;
};

const num1 = 11;
const num2 = 18;
console.log("GCD:", findGCD(num1, num2));

// let num1 = 4, num2 = 8;
// let ans;

// for (let i = 1; i <= Math.min(num1, num2); i++) {
//   if (num1 % i === 0 && num2 % i === 0) {
//     ans = i;
//   }
// }

// console.log("The GCD of the two numbers is " + ans);

// An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

const checkArmstrongNum = (a) => {
  const numStr = a.toString();
  const len = numStr.length;
  let sum = 0;

  for (let i = 0; i < len; i++) {
    sum += Math.pow(parseInt(numStr[i]), len);
  }

  return sum === a;
};
// console.log(Math.pow(parseInt(2), 3));
// console.log(checkArmstrongNum(153)); // Output: true (153 is an Armstrong number)
// console.log(checkArmstrongNum(123)); // Output: false (123 is not an Armstrong number)

// Print all Divisors of a given Number

const checkDivisorsNumber = (data) => {
  let result = [];

  for (let i = 0; i < data; i++) {
    if (data % i === 0) {
      result.push(i);
    }
  }
  return result;
};

// console.log(checkDivisorsNumber(18)); [ 1, 2, 3, 6, 9 ]

// Check if a number is prime or not

// what is prime number;

/*
A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. In simpler terms, a prime number is a whole number greater than 1 that is only divisible by 1 and itself, without resulting in a remainder.

*/

const checkPrimeNumber = (item) => {
  if (item <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }

  for (let i = 2; i < item; i++) {
    if (item % i === 0) {
      return false; // If item is divisible by any number other than 1 and itself, it's not prime
    }
  }

  return true; // If no divisors other than 1 and itself, it's prime
};

console.log("Is it a prime number?", checkPrimeNumber(11));
