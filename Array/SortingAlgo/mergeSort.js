const mergeArray = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);

      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const mergeSortAlgo = (arr) => {
  const n = arr.length;
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(n / 2);
  let leftArr = arr.slice(0, mid);
  let rightArry = arr.slice(mid);
  //   console.log("Print left and right index", leftArr, rightArry);

  return mergeArray(mergeSortAlgo(leftArr), mergeSortAlgo(rightArry));
};

const arr = [32, 1, 34, 23, 78, 90, 24];

console.log(mergeSortAlgo(arr));
