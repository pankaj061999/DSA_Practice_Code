// Hashing Problem count nuber repeation in givien array;

const hashFunc = (arr, quer) => {
  // step 1: count max nuber given array
  let max1 = Math.max(...arr);

  // step: 2 create  array for max1 length
  let hashArrv = Array.from({ length: max1 + 1 }, () => 0);

  // step: 3 itreate arr
  for (let i = 0; i < arr.length; i++) {
    hashArrv[arr[i]] += 1;
  }
  // console.log(max1, hashArrv);

  // step : 4 now find repation based on quer

  for (let j = 0; j < quer.length; j++) {
    const q = quer[j];

    if (q > max1 || q < 0) {
      return 0;
    } else {
      console.log(hashArrv[q]);
      return hashArrv[q];
    }
  }
};

let arr = [1, 2, 1, 4, 2, 8, 0];
let quer = [1, 4, 5, 2, 10];

console.log(hashFunc(arr, quer));

// Hashing a given string to find charchter repeation

const CharacterHashFunc = (str, stringArray) => {
  const createArray = Array.from({ length: 26 }, () => 0);
  console.log("create a array ==>>", createArray);

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    console.log("Print lower case all elemnent ==>>", char);
    const charCode = char.charCodeAt(0) - 97;
    console.log("Charckter code===>>", charCode);

    if (charCode >= 0 && charCode < 26) {
      createArray[charCode]++;
    }
  }

  let result = [];

  for (let j = 0; j < stringArray.length; j++) {
    const charCode = stringArray[j].charCodeAt(0) - 97;

    if (charCode >= 0 && charCode < 26) {
      result.push(createArray[charCode]); // Push counts for characters in stringArray
    } else {
      result.push(0); // Character not in the valid range (a to z)
    }
  }

  return result;
};

let str = "abscaqrtdafaaa";

let stringArray = ["a", "c", "e", "p", "r", "t"];

console.log(CharacterHashFunc(str, stringArray));

// Q)1 Count frequency of each element in the array

// solution 1 based on Array based hashing Approch

const f1 = (a1, q1) => {
  const max1 = Math.max(...a1);
  //   console.log("Print max1 nunber", max1);

  //now create max1 nuber array

  let a2 = Array.from({ length: max1 + 1 }, () => 0);
  //   console.log("a2 ==>>", a2);

  //itreate array
  for (let i = 0; i < a1.length; i++) {
    a2[a1[i]] += 1;
  }

  //   console.log("after for loop ===>>", a2);

  let result = [];
  for (let j = 0; j < q1.length; j++) {
    const q = q1[j];
    if (j > max1 && j < 0) {
      return 0;
    } else {
      result.push(a2[q]);
    }
  }

  return result;
};

const a1 = [10, 5, 10, 15, 10, 5];

const q1 = [10, 5, 15];

console.log("array Hashing solution ===>> ", f1(a1, q1));
