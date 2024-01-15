"use strict";
const x = 12;
// x = "pankaj"
let b = "pankaj";
b = 8;
let c = "arjun";
c = 23;
function sum(a) {
    console.log(a + 12, b, c);
    return a + 13;
}
sum(12);
console.log("print x", x, sum(12));
// Function using the custom data type
const sum1 = (a, b) => {
    console.log(a + b);
    return a + b;
};
// Function call
// sum1("2", "4");
const result = sum1("2", "4");
console.log(result);
