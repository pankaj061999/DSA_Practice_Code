const findMedianSortedArrays = (Array1, Array2) => {
  let newArray = [...Array1, ...Array2].sort((a, b) => a - b);

  let result = 0;

  if (newArray.length % 2 === 0) {
    const midIndex = newArray.length / 2;
    result = (newArray[midIndex - 1] + newArray[midIndex]) / 2;
  } else {
    const midIndex = Math.floor(newArray.length / 2);
    result = newArray[midIndex];
  }

  console.log("Median:", result);
};

const Array1 = [1, 3];
const Array2 = [2, 4];
findMedianSortedArrays(Array1, Array2);
