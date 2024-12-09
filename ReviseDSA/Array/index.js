// Count Number length of a number
const newNumber = 9;

if (newNumber < 0) {
  return null;
}
// console.log("Print Number total length ===>> first",  newNumber.toString().length, Math.floor(Math.log10(newNumber) + 1), Math.log10(newNumber));

const funcCountNmberlength = (num) => {
  let cnt = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    console.log("Print Number total length ===>>", num);
    cnt++;
  }
  console.log("Print Number total length ===>>", cnt);
  return;
};

// funcCountNmberlength(123445)

// Reverse Digits of A Number

const n = 12345;

// wprst case

const finalReverseNumber = (num) => {
  let n1 = "";

  for (let i = num.toString().length - 1; i >= 0; i--) {
    console.log(
      "Print Number total length ===>>",
      num.toString().charAt(i),
      num
    );
    n1 += num.toString().charAt(i);
  }
  console.log("Print Number total length ===>>", n1);
};

// finalReverseNumber(12345)

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let isNegative = x < 0;
  // let revNum = 0;
  let num = Math.abs(x).toString().split("");

  console.log("absultue number ==<>", num);

  // console.log("absultue number ==<>", num.reverse().join(''))

  // while (num > 0) {
  //     let ld = num % 10;
  //     revNum = (revNum * 10) + ld;
  //     console.log("Pritn num after divded 10", num/10)

  //     num = Math.floor(num / 10);

  //     console.log("Print  after convert====>>", revNum,ld, num)
  // }

  // if (revNum > 2 ** 31 - 1) {
  //     return 0;
  // }

  console.log(
    "Print final output",
    isNegative ? -num.reverse().join("") : num.reverse().join("")
  );
  return isNegative ? -num.reverse().join("") : num.reverse().join("");
};

//  reverse(-123456.11)

// Q.3 Check if a number is Palindrome or Not

const checkNumberPalindrome = (num) => {
  let isNegative = num < 0;

  let n1 = Math.abs(num).toString();

  let n2 = n1.split("").reverse().join("");

  for (let i = 0; i < n1.length; i++) {
    if (n1[i] !== n2[i]) {
      console.log("Print final output", false);
      return false;
    }
  }
};

// const finalAns = checkNumberPalindrome(4554);

// Find GCD of two numbers

const findGCD = (num1, num2) => {
  if (num1 === 0) {
    console.log("Print final output", num2);
  }
  if (num2 === 0) {
    console.log("Print final output", num1);
  }
  while (num2 !== 0) {
    let temp = num1 % num2;
    num1 = num2;
    num2 = temp;
    console.log("Print final answer ==>> 1", num2, temp);
  }

  console.log("Print final return  ==>>", num1);

  return num1;
};

// const finalOutput = findGCD(20, 15);

// Check if a number is Armstrong Number or not

const checkArmStrongNumber = (num) => {
  let n = num.toString().length;
  let sum = 0;
  console.log("Print number length ===>>", n);

  for (let i = 0; i < n; i++) {
    let digit = parseInt(num.toString().charAt(i));
    sum += Math.pow(digit, n);
    console.log(`Sum after processing digit ${digit}:`, sum);
  }

  if (sum === num) {
    console.log("Priunt true");
    return true;
  } else {
    console.log("Priunt false");
    return false;
  }
};

// const result = checkArmStrongNumber(153);

const findAllDiversor = (num) => {
  let divisors = [];

  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (i !== Math.floor(num / i)) {
        divisors.push(num / i);
      }
    }
  }

  divisors.sort((a, b) => a - b);

  console.log("Print final output ===>>", divisors);
  return divisors;
};

// findAllDiversor(36);

// recursion
const printNameNTime = (num) => {
  if (num === 0) {
    return;
  }
  if (num > 0) {
    console.log("Print Name Pankaj");
  }
  printNameNTime(num - 1);
};

// printNameNTime(5)

// Sum of first N Natural Numbers

const sumOfNumber = (num) => {
  if (num === 0) {
    return 0;
  }

  return num + sumOfNumber(num - 1);
};

// console.log("Print sum ===>>",sumOfNumber(10));

// Factorial of a Number : Iterative and Recursive

const factorialNNumber = (num) => {
  if (num === 0) {
    return 1;
  }

  return num * factorialNNumber(num - 1);
};

// console.log("Print factorial ===>>",factorialNNumber(5));

// Reverse a given Array

const findReverseArray = (arr) => {
  if (arr.length === 0) {
    return [];
  }
  // return arr.reverse();
  console.log("Print array ===>>", arr.slice(0, arr.length - 1), [
    arr[arr.length - 1]
  ]);
  return [arr[arr.length - 1]].concat(
    findReverseArray(arr.slice(0, arr.length - 1))
  );
};

// console.log("Print reverse array ===>>", findReverseArray([1, 2, 3, 4, 5]));

// Check if the given String is Palindrome or not

const checkStringPalindrome = (str) => {
  if (str.length <= 1) {
    return true;
  }

  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  for (let i = 0; i < Math.floor(cleanStr.length / 2); i++) {
    if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
      return false; 
    }
  }
  return true;

};


// console.log(checkStringPalindrome("madam  aap")); 

// Print Fibonacci Series up to Nth term

// f(0) = 0, f(1) = 1, for more then 1 have use this f(i) = f(i-1) + f(i-2); 


const findFibonicSries = (num) => {
  if (num <= 0) {
    return [];
  } else if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  } else {
    const fibSeries = [0, 1];
    for (let i = 2; i < num; i++) {
      const nextFib = fibSeries[i - 1] + fibSeries[i - 2];
      // console.log("Print Fibonic Series ===>>", fibSeries, nextFib, i);
      fibSeries.push(nextFib);
    }
    return fibSeries;
  }
};
// console.log("Print Fibonic Series ===>>", findFibonicSries(10));


const onlyNumberReturn = (num)=>{
  if (num <= 0) {
    return null;
  } else if (num === 1) {
    return 0;
  } else if (num === 2) {
    return 1;
  } else {
    let a = 0, b = 1, nextFib;
    for (let i = 2; i <= num; i++) {
       nextFib = a + b;
      a = b;
      b = nextFib
    }
    return b
  }

}

console.log("Print Fibonic Number Value this", onlyNumberReturn(4))