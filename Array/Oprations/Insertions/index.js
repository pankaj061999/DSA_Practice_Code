const arrayInseratElement = (array, element, InserPostion) => {
  console.warn("before", array);
  for (let i = array.length - 1; i >= 0; i--) {
    if (i >= InserPostion) {
      array[i + 1] = array[i];
      if (i == InserPostion) {
        array[i] = element;
      }
    }
  }

  console.warn(array);
};

const array = [34, 21, 45, 78, 89, 12];
const element = 33;
const InsertPostion = 4;

arrayInseratElement(array, element, InsertPostion);
