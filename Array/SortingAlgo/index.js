// bubble sort algo
const bubbleSort = (arr) => {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let isSwap = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        isSwap = true;
        let sum = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = sum;
      }
    }
    if (!isSwap) {
      console.log("Print arrruyyyyyy      ====================>>>>>>>> 1", arr, i);
      return arr;
    }
  }
  console.log("Print arrruyyyyyy      ====================>>>>>>>> 2", arr);
  return arr;
};

const A1 = [3, 4, 1, 9, 5, 7, 8, 10, 88, 12, 32, 89];

// bubbleSort(A1);

// time complixity = 0(n^2)

// insert sorting algo

const insertSort = (arr) => {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    let key = arr[i];

    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }

  console.log("Print arr2 ===>>>", arr);
};

const A2 = [3, 4, 1, 9, 5, 7, 8, 10, 88, 12, 32, 89];

// insertSort(A2);

// selection sorting algo

const selectionSorting = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let min = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        console.log("Print min swap eleemnt ====>>", arr[j], arr[min], min, j);
        min = j;
      }
    }

    if (min != i) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }

  console.log("Prtint final answer", arr);
};

// selectionSorting(A2);
