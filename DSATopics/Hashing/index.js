// hashing help to count number of repation

const NuberReaptCount = (arr, quer) => {
  let max1 = Math.max(...arr);

  let newHashArray = Array.from({ length: max1 + 1 }, () => 0);

  //   step 3
  for (let i = 0; i < arr.length; i++) {
    newHashArray[arr[i]] += 1;
  }

  for (let j = 0; j < quer.length; j++) {
    const q = quer[j];
    if (q > max1 || q < 0) {
      return 0;
    } else {
      console.log(newHashArray[q]);
      return newHashArray[q];
    }
  }
  console.log("Print arr", max1, "newHashArray", newHashArray);
};

const arr = [1, 1, 2, 3, 1, 8, 3, 9];
let quer = [1, 4, 5, 2, 10];

// NuberReaptCount(arr, quer);

// selection sorting algo

const sortingAlgo1 = (arr) => {
  if (arr.length < 0) {
    return arr;
  }

  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  console.log("Print arr", arr);
  return arr;
};

const arr1 = [13, 46, 24, 52, 20, 9];

sortingAlgo1(arr1);
