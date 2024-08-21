// curring: ===>>>Currying एक तकनीक है जिसमें एक फ़ंक्शन, जो कई आर्ग्युमेंट्स लेता है, को कई फ़ंक्शन्स की एक श्रृंखला में तोड़ा जाता है, जिसमें हर फ़ंक्शन एक आर्ग्युमेंट लेता है और अगला फ़ंक्शन लौटाता है।

const add = (a) => (b) => (c) => {
  console.log("Print a", a, b, c);
  return a + b + c;
};

// console.log(add(1)(2)(3));

// nested array how to convert simple array

const findSimpleArray = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      res.push(arr[i]);
    } else {
      res = res.concat(findSimpleArray(arr[i]));
      console.log("recursive ==>>", res);
    }
  }
  console.log("res ==>>", res);
  return res;
};

const arr = [1, [2, 3], [4, [5, 6]], [7, [8, [9, 10]]]];

// findSimpleArray(arr);

const countRepeatString = (str) => {
  // Step 1: Create a Set to store unique characters
  const uniqueCharsSet = new Set(str);

  // Step 2: Convert Set to Array to use indices for frequencies
  const uniqueCharsArray = Array.from(uniqueCharsSet);

  // Step 3: Create an array to store frequencies of unique characters
  const frequencies = new Array(uniqueCharsArray.length).fill(0);

  // Step 4: Create a Map to map characters to their indices in the uniqueCharsArray
  const charIndexMap = uniqueCharsArray.reduce((acc, char, index) => {
    acc[char] = index;
    return acc;
  }, {});

  console.log("res ==>>", uniqueCharsSet, uniqueCharsArray, charIndexMap);
  // Step 5: Update the frequency count
  for (const char of str) {
    const index = charIndexMap[char];
    if (index !== undefined) {
      frequencies[index] += 1;
    }
  }

  // Print the frequency of each character
  //   uniqueCharsArray.forEach((char, index) => {
  //     console.log(`Character '${char}' appears ${frequencies[index]} times.`);
  //   });
};

let str = "bhbhhbhbhbasajssjqsjnwndwbdhwbdjw";
countRepeatString(str);
