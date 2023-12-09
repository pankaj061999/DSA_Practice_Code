sum(8, b);
// console.log(a);
// here a is not doing hoisting
console.log(b);

var a = 5;
var b = 3;
function sum(a, b) {
  console.log(a + b);
}
