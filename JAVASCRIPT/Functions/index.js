// Function expressions

let sum = (a, b) => {
  return a + b;
};

// As the function creation happens in the context of the assignment expression (to the right side of =), this is a Function Expression.
let func = function () {
  console.log("Hello");
};
let F1 = sum(3, 4);
console.log("print F1", F1, func);
