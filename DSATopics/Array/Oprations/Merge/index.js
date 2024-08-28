const mergeArrays = (arr1, arr2) => {
  let array3 = [];
  for (let i = 0; i < arr1.length; i++) {
    array3.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    array3.push(arr2[j]);
  }

  return array3;
};

const array1 = [1, 2, 3];
const array2 = [4, 5, 6, 8, 9, 1, 2, 3, 4];
const merged = mergeArrays(array1, array2);
console.log(merged.sort());
