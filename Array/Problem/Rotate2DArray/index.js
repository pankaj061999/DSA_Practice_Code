// Q.1) rotate image 90 degree in 2D array
const rotateTwoDArray = (arr) => {
  // first transpose array
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }

  //   after that reverse array
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length / 2; j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[i][arr.length - 1 - j];
      arr[i][arr.length - j] = temp;
    }
  }

  console.log(arr);
};

let B1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// rotateTwoDArray(B1);

{
  /* -------------------------------------*************************************---------------------------------------------*/
}
// Q.2) Spiral Traversal of Matrix

const NoramlTraversalArray = (arr) => {
  let result = [];

  // without spiral display array
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively traverse nested array
      let nestedResult = NoramlTraversalArray(arr[i]);
      result = result.concat(nestedResult);
      // console.log("Print solution", nestedResult);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};

// for spiral Array print SpiralTraversalArray

const SpiralTraversalArray = (arr) => {
  let finalMatrix = [];

  let top = 0;
  let left = 0; // Add 'let' to declare the variable
  let bottom = arr.length - 1; // Correct variable name
  let right = arr[0].length - 1;

  while (left <= right && top <= bottom) {
    // first print top left to right first array;
    for (let i = left; i <= right; i++) {
      finalMatrix.push(arr[top][i]);
    }
    top++;

    // next top to bottom
    for (let i = top; i <= bottom; i++) {
      finalMatrix.push(arr[i][right]);
    }
    right--;

    if (top <= bottom) {
      // Corrected the condition from 'left <= right'
      for (let i = right; i >= left; i--) {
        finalMatrix.push(arr[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      // Corrected the condition from 'top <= bottom'
      for (let i = bottom; i >= top; i--) {
        finalMatrix.push(arr[i][left]);
      }
      left++;
    }
  }

  console.log("Print array final ==>>>", finalMatrix);
};
let B2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// Output should be like this: 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10.
const resultArray = NoramlTraversalArray(B2);
SpiralTraversalArray(B2);
// console.log("Output:", resultArray.join(", "), resultArray);
