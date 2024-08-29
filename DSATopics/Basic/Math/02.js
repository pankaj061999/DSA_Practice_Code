const reverseNuber = (n) => {
  const b = n.toString();
  let result = "";

  for (let i = n.toString().length - 1; i >= 0; i--) {
    result += b[i];
  }
  return result;
};

console.log(reverseNuber(123));

// check palindrome or not

// solution 1)
const f = (n) => {
  let b = n.toString();

  let length = b.length;
  let r = b.split("").reverse().join("");
  console.log(r, length, b);
  if (length === 0 && length === 1) {
    return true;
  } else if (b === r) {
    return true;
  } else {
    return false;
  }
};

console.log(f(1441));

// solution 2.

const f2 = (x) => {
  if (x < 0 && x % 10 === 0 && x != 0) {
    return false;
  }

  let res = 0;
  let orignal = x;

  while (x > 0) {
    res = res * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return orignal === res;
};

console.log(f2(1212));

// time complexity is O(n) and space complicity O(1)

// check GCD nuber for n1 and n2 to

const GCD = (n1, n2) => {
  if (n1 == n2) {
    return n1;
  } else if (n1 > n2) {
    return GCD(n1 - n2, n2);
  } else if (n1 < n2) {
    return GCD(n1, n2 - n1);
  }
};

console.log(GCD(4, 8));

// second solution 2)

const f3 = (a1, a2) => {
  let res = Math.min(a1, a2);

  while (res > 0) {
    if (a1 % res == 0 && a2 % res == 0) {
      break;
    }
    res--;
  }
  return res;
};

console.log(f3(4, 5));

// Space Compl = O(1)

// calculate armstrong nuber sum

const f1 = (n) => {
  let isNegative = n < 0 ? true : false;

  let a = Math.abs(n).toString();
  let sum = 0;
  let len = a.length;

  //   console.log("Print negative ", a, sum, len, isNegative)
  if (len === 0 && len === 1) {
    return n;
  }
  for (let i = 0; i < len; i++) {
    sum += Math.pow(a[i], len);
  }
  let res = isNegative ? -sum : sum;
  return res === n;
};

console.log(f1(9474));

// time complicity = O(log10(n)) and space comp= O(1)

// Check if a number is Armstrong Number or not

const b1 = (n) => {
  let temp = n;
  let sum = 0;
  let numberLength = 0;

  // Calculate the number of digits
  while (temp > 0) {
    temp = Math.floor(temp / 10);
    numberLength++;
  }

  temp = n; // Reset temp to the original value

  // Calculate the sum of digits raised to the power of the number of digits
  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, numberLength);
    temp = Math.floor(temp / 10);
  }

  return sum === n;
};

//  space complexity is O(1) time comp===O(log N)

console.log("check armstrong nuber or not ===>>", b1(9474));

// Print all divisor nuber

const f4 = (b) => {
  if (b === 0) {
    return b;
  }
  let res = [];
  for (let i = 1; i <= b; i++) {
    if (b % i == 0) {
      res.push(i);
    }
  }
  return res;
};
console.log(f4(21));

// time comp:O(n) and space comp=O(n)

// seond solution

const f5 = (n) => {
  let res = [];

  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      res.push(i);
      if (i !== n / i) {
        res.push(n / i);
      }
    }
  }
  return res.sort((a, b) => a - b);
};

console.log("Print result for all divisor nuber ===>>", f5(21));

// isPrime or not Prime

function isPrime(N) {
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      return false;
    }
  }
  return true;
}

let n = 11;
let ans = isPrime(n);

if (n !== 1 && ans === true) {
  console.log("Prime Number");
} else {
  console.log("Non Prime Number");
}
