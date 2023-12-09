const A = 5;

if (A > 9) {
  console.log("Pankaj");
} else if (A > 5) {
  console.log("Meena");
} else {
  console.log("Kumar");
}

// Switch Statement

let B = 12;

switch (B) {
  case 1:
    console.log("This is first case");
    break;

  case 2:
    console.log("Second cases");
    break;

  case 3:
    console.log("third case");
    break;

  default:
    console.log("default statement match");
}

// datasType JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

//  Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = { firstName: "John", lastName: "Doe" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

const res = 12 + 2 + "Pankaj";

console.log(res);

const array = [1, "apnkaj", 2, 3, 4];
console.log(array);

// while loop
let i = 0;
let text = "";

while (i < 10) {
  text += "The number is " + i;
  i++;
  //   console.log("Print ", text);
}

const sum = (a, b) => {
  return a + b;
};
console.log(sum(2, 3));
sum(2, 3);

// self invoke function
(function sum1(a, c) {
  console.log(a + c);
  return a + c;
})(4, 5);
