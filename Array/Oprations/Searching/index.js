// 1.) linear Searching algo method It works on both sorted and unsorted lists.Time complexity: O(n) in the worst case.

const SearchElement = (arr, element) => {
  let index = undefined;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == element) {
      index = i;
    }
  }
  console.warn("Print array index =>", index, arr[index]);
};

const arry = [21, 1, 23, 45, 65, 34, 89, 8, 2];
const element = 45;
SearchElement(arry, element);

// 2.)  Binary Search is a searching technique which works on the Divide and Conquer approach  It is used to search for any element in a sorted array. Compared with linear, binary search is much faster with a Time Complexity of O(logN), whereas linear search works in O(N) time

const binarySearchingAlgo = (arr, element) => {
  let start = 0;
  let end = arr.length - 1;
  let postion = undefined;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    // console.log(arr);

    // when elemnt is equal to midle element
    if (arr[mid] == element) {
      console.log(mid);
    }

    if (arr[mid] > element) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
};

const data = [1, 2, 21, 23, 34, 45, 65, 8, 89];
const SearchNuber = 45;

const result = binarySearchingAlgo(data, SearchNuber);
