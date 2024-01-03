// const Print for loop only

const forLOopCheckFunction = (arr) => {
  // For loop
  for (let i = 0; i < arr.length - 1; i++) {
    // console.log("Print i value ====>>>", arr[i]);
  }

  // this loop Print array or object  value

  for (let num of arr) {
    // console.log("Print response ===>>", num);
  }

  // this loop Print array or object key value
  for (let i in arr) {
    console.log("Print response for in loop===>>", i);
  }
};

const Arr = [1, 2, 3, 4, 1, 5, 7, 6, 8];

const forInLoopObject = (person) => {
  for (let key in person) {
    console.log("Second loop value ===>>", key);
  }
};

const person = { fname: "John", lname: "Doe", age: 25 };

console.log("Print for in loop ===>>", forInLoopObject(person));

console.log("Print Forr Loops value===>>", forLOopCheckFunction(Arr));
