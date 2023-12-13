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
