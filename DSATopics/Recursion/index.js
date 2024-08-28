// find The code you've written is intended to be a recursive function to calculate the power of a number, specifically. The function f1(a, b) should recursively multiply a by itself b times. However, there are a few issues in the code:

const f1 = (a, b) => {
  if (b === 0) {
    return 1;
  }

  let result = a * f1(a, b - 1);
  return result;
};

let a = 2,
  b = 10;

f1(a, b);
console.log("Print result of this f1 function", f1(a, b));

// Q.2 find Fibonacci sequence f(25) value;
// time complixty is 0(n)
// f(n) = f(n-1) + f(n-2) , f(0) == 0, f(1) = 1

const f2 = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  let prev = 0,
    curr = 1;
  for (let i = 2; i < n; i++) {
    let result = prev + curr;
    prev = curr;
    curr = result;
  }
  console.log("Print result ===>>", curr);
  return curr;
};

f2(5);

// find n natural number sum

const sumNum = (n) => {
  if (n === 0) {
    return 0;
  }
  let sum = n + sumNum(n - 1);
  console.log("Print n number sum ===>>", sum);
  return sum;
};

sumNum(5);
