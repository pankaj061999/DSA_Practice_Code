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
