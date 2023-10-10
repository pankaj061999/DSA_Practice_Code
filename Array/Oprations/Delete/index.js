/* 1.) remove a element based on spefic position */

const deleteElementInArray = (array, position) => {
  for (let i = position; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  console.warn(array);
};

const array = [12, 34, 2, 89, 78];
let position = 2;
deleteElementInArray(array, position);

/* 2.) remove a element maybe duplicate */

const deleteDuplicateElementInArray = (array, element) => {
  console.warn("deleteDuplicateElementInArray before", array);
  let count = 0;
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== element) {
      newArray[count] = array[i];
      count++;
    }
  }
  console.warn("deleteDuplicateElementInArray", newArray);
};

const data = [12, 34, 2, 89, 2, 34, 78];
let DeleteElement = 34;
deleteDuplicateElementInArray(data, DeleteElement);

/* 3.) remove a duplicate element */
function removeDuplicates(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    console.warn("duplicate eleemnt ===>>", uniqueArr);
    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

const data1 = [12, 34, 2, 89, 2, 34, 78];
const uniqueData = removeDuplicates(data1);

console.log("Unique Elements:", uniqueData);

var removeElement = function (nums, val) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }
  nums.length = index;
  return nums;
};

const nums = [3, 2, 2, 3];
const val = 3;

const t1 = removeElement(nums, val);
console.warn(t1);
